import { NextRequest, NextResponse } from 'next/server'
import { getIAMToken } from '@/lib/watson-auth'

/**
 * API Route for Watson AI Compliance Q&A
 * This endpoint handles compliance questions using IBM Watson AI
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, category } = body

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    // Get Watson AI credentials from environment variables
    const watsonApiKey = process.env.WATSON_API_KEY
    const watsonUrl = process.env.WATSON_URL || 'https://us-south.ml.cloud.ibm.com'
    const watsonProjectId = process.env.WATSON_PROJECT_ID
    // Model ID - user MUST set WATSON_MODEL_ID in .env.local
    // Common options: ibm/granite-8b-instruct-v2, ibm/granite-13b-instruct-v2, 
    // meta-llama/llama-3-8b-instruct, etc.
    // Visit /api/compliance/models to see available models
    const watsonModelId = process.env.WATSON_MODEL_ID

    // Debug logging (remove in production)
    console.log('Watson Config Check:', {
      hasApiKey: !!watsonApiKey,
      hasProjectId: !!watsonProjectId,
      apiKeyLength: watsonApiKey?.length || 0,
      projectIdLength: watsonProjectId?.length || 0,
      url: watsonUrl,
      modelId: watsonModelId,
    })

    if (!watsonApiKey || !watsonProjectId) {
      console.error('Watson AI configuration missing:', {
        hasApiKey: !!watsonApiKey,
        hasProjectId: !!watsonProjectId,
      })
      return NextResponse.json(
        { 
          error: 'Watson AI configuration missing. Please set WATSON_API_KEY and WATSON_PROJECT_ID environment variables.',
          fallback: true,
          debug: {
            hasApiKey: !!watsonApiKey,
            hasProjectId: !!watsonProjectId,
          }
        },
        { status: 500 }
      )
    }

    if (!watsonModelId) {
      return NextResponse.json(
        { 
          error: 'WATSON_MODEL_ID is required. Visit /api/compliance/models to see available models, then set WATSON_MODEL_ID in .env.local',
          fallback: true,
        },
        { status: 500 }
      )
    }

    // Build the prompt for compliance Q&A
    const systemPrompt = `You are an expert AI assistant specializing in Michigan business compliance, regulations, and legal requirements. 
Provide accurate, helpful information about business licenses, taxes, employment law, safety regulations, and other compliance topics.
Always include a disclaimer that your advice is informational and not legal counsel.
If the question involves complex legal matters, recommend consulting with a qualified attorney.
Focus on Michigan-specific regulations and requirements.`

    const userPrompt = `Category: ${category}\n\nQuestion: ${question}\n\nPlease provide a comprehensive answer about Michigan business compliance.`

    // Get IAM access token from API key
    let accessToken: string
    try {
      accessToken = await getIAMToken(watsonApiKey)
    } catch (tokenError) {
      console.error('Failed to get IAM token:', tokenError)
      return NextResponse.json({
        response: generateFallbackResponse(question, category),
        requiresLegalReview: shouldFlagLegal(question),
        fallback: true,
        error: `Authentication failed: ${tokenError instanceof Error ? tokenError.message : 'Failed to get IAM token'}`,
      })
    }

    // Call Watson AI API (Watsonx.ai) with IAM token
    const response = await fetch(`${watsonUrl}/ml/v1/text/generation?version=2024-11-19`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        project_id: watsonProjectId,
        model_id: watsonModelId,
        input: userPrompt,
        parameters: {
          decoding_method: 'greedy',
          max_new_tokens: 4096,
          min_new_tokens: 50,
          temperature: 0.3, // Lower temperature for more factual responses
          top_p: 0.9,
          repetition_penalty: 1.1,
        },
        system_prompt: systemPrompt,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      const statusText = response.statusText
      let errorMessage = `Watson API Error (${response.status}): ${statusText}`
      
      // Check if it's a model error
      try {
        const errorJson = JSON.parse(errorData)
        if (errorJson.errors?.[0]?.code === 'model_not_supported' || 
            errorJson.errors?.[0]?.code === 'model_not_found') {
          errorMessage = `Model '${watsonModelId}' is not available. Please set WATSON_MODEL_ID in .env.local to a valid model. Visit /api/compliance/models to see available models.`
        }
      } catch (e) {
        // Not JSON, use original error
      }
      
      console.error('Watson AI API Error:', {
        status: response.status,
        statusText,
        error: errorData,
        modelId: watsonModelId,
        url: `${watsonUrl}/ml/v1/text/generation?version=2024-11-19`,
      })
      
      // Return fallback response if API fails, but include error info
      return NextResponse.json({
        response: generateFallbackResponse(question, category),
        requiresLegalReview: shouldFlagLegal(question),
        fallback: true,
        error: errorMessage,
        errorDetails: errorData.substring(0, 200), // First 200 chars of error
        suggestion: 'Visit http://localhost:3000/api/compliance/models to see available models for your project.',
      })
    }

    const data = await response.json()
    
    // Handle different response formats from Watson API
    let aiResponse = ''
    if (data.results && Array.isArray(data.results) && data.results.length > 0) {
      aiResponse = data.results[0].generated_text || data.results[0].text || ''
    } else if (data.generated_text) {
      aiResponse = data.generated_text
    } else if (data.text) {
      aiResponse = data.text
    }

    // Clean up the response (remove prompt if included)
    let cleanedResponse = aiResponse
      .replace(userPrompt, '')
      .replace(systemPrompt, '')
      .trim()

    if (!cleanedResponse) {
      cleanedResponse = generateFallbackResponse(question, category)
    }

    return NextResponse.json({
      response: cleanedResponse,
      requiresLegalReview: shouldFlagLegal(question),
      fallback: false,
    })
  } catch (error) {
    console.error('Error calling Watson AI:', error)
    
    // Try to get the request body for fallback
    let body = {}
    try {
      body = await request.json()
    } catch (e) {
      // Request body already consumed, use empty object
    }
    
    return NextResponse.json({
      response: generateFallbackResponse(body.question || '', body.category || 'general'),
      requiresLegalReview: shouldFlagLegal(body.question || ''),
      fallback: true,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
    })
  }
}

// Fallback response generator (used when Watson AI is unavailable)
function generateFallbackResponse(question: string, category: string): string {
  const responses: Record<string, string> = {
    tax: `Michigan businesses must file annual business tax returns with the Michigan Department of Treasury. For LLCs and S-Corps, you'll need to file Form MI-1040 and pay the Michigan Business Tax. Sales tax is applicable on most goods and services. Quarterly estimated tax payments are required if you expect to owe more than $500 in taxes. Keep detailed records of all income and expenses for at least 7 years. Consider consulting a Michigan CPA for your specific situation.`,
    licensing: `Business licenses in Michigan vary by industry and location. You'll typically need: (1) A state business license, (2) Industry-specific permits, (3) County/local business licenses. The process usually takes 2-4 weeks. You can apply online through Michigan.gov or through your local county clerk. Document requirements vary - have your business plan, ownership information, and location details ready.`,
    employment: `When hiring employees in Michigan, you must: Obtain an EIN from the IRS, Register with the Michigan Department of Labor, Withhold payroll taxes, Provide workers' compensation insurance, Follow minimum wage laws ($10.33/hour as of 2024), Comply with break laws (meal periods required for shifts over 6 hours). Keep detailed payroll records for at least 3 years. Consult an employment attorney about your employee handbook and policies.`,
    safety: `Michigan follows OSHA standards for workplace safety. Requirements include: Maintaining a safe work environment, Having emergency procedures, Proper equipment training, Injury reporting within 24 hours, Maintaining safety records for 5+ years. Conduct regular safety audits and document everything. Industry-specific requirements may apply to your business.`,
    general: `All Michigan businesses must: Have a business structure (sole proprietorship, LLC, Corporation), Obtain an EIN from the IRS, Register with the state, Pay appropriate taxes, Maintain business records, Comply with employment laws if you have employees, Obtain necessary licenses and permits. Start by visiting Michigan.gov/business for official guidance.`,
  }

  return (
    responses[category] ||
    responses['general'] ||
    'We recommend consulting with a Michigan business attorney or accountant for detailed guidance on your specific situation.'
  )
}

function shouldFlagLegal(question: string): boolean {
  const legalKeywords = [
    'contract',
    'lawsuit',
    'dispute',
    'liability',
    'attorney',
    'legal',
    'agreement',
    'employment contract',
    'intellectual property',
    'trademark',
    'patent',
    'copyright',
  ]

  return legalKeywords.some((keyword) => question.toLowerCase().includes(keyword))
}
