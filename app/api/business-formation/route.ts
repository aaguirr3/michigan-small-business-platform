import { NextRequest, NextResponse } from 'next/server'
import { getIAMToken } from '@/lib/watson-auth'

/**
 * API Route for Watson AI Business Formation Plan
 * This endpoint generates personalized business formation plans using IBM Watson AI
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessIdea, businessName, location, businessType } = body

    if (!businessIdea || typeof businessIdea !== 'string') {
      return NextResponse.json(
        { error: 'Business idea is required' },
        { status: 400 }
      )
    }

    if (!businessName || typeof businessName !== 'string') {
      return NextResponse.json(
        { error: 'Business name is required' },
        { status: 400 }
      )
    }

    // Get Watson AI credentials from environment variables
    const watsonApiKey = process.env.WATSON_API_KEY
    const watsonUrl = process.env.WATSON_URL || 'https://us-south.ml.cloud.ibm.com'
    const watsonProjectId = process.env.WATSON_PROJECT_ID
    const watsonModelId = process.env.WATSON_MODEL_ID

    console.log('Watson Config Check:', {
      hasApiKey: !!watsonApiKey,
      hasProjectId: !!watsonProjectId,
      url: watsonUrl,
      modelId: watsonModelId,
    })

    if (!watsonApiKey || !watsonProjectId) {
      console.error('Watson AI configuration missing')
      return NextResponse.json(
        { 
          error: 'Watson AI configuration missing. Please set WATSON_API_KEY and WATSON_PROJECT_ID environment variables.',
          fallback: true,
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

    // Build the prompt for business formation plan
    const systemPrompt = `You are an expert business formation advisor specializing in Michigan business registration and compliance.
Generate a detailed, step-by-step business formation plan tailored to the specific business idea.
Focus on Michigan-specific requirements, costs, and procedures.
Include practical advice about business structure, registration, EIN, permits, and initial setup.`

    const userPrompt = `Business Idea: ${businessIdea}
Business Name: ${businessName}
Location: ${location || 'Michigan'}
Preferred Business Type: ${businessType || 'Not specified'}

Please generate a comprehensive business formation plan with:
1. Recommended business structure (LLC, Corporation, etc.) and why
2. Step-by-step formation process specific to Michigan
3. Estimated costs for each step
4. Timeline expectations
5. Required permits and licenses
6. Tax registration requirements
7. A checklist of action items

Format the response as a structured plan with clear sections.`

    // Get IAM access token from API key
    let accessToken: string
    try {
      accessToken = await getIAMToken(watsonApiKey)
    } catch (tokenError) {
      console.error('Failed to get IAM token:', tokenError)
      return NextResponse.json({
        error: `Authentication failed: ${tokenError instanceof Error ? tokenError.message : 'Failed to get IAM token'}`,
        fallback: true,
      }, { status: 500 })
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
        input: `${systemPrompt}\n\n${userPrompt}`,
        parameters: {
          max_new_tokens: 2048,
          temperature: 0.7,
          top_p: 0.9,
          top_k: 50,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Watson AI API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      })
      throw new Error(`Watson AI API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    if (!data.results || !data.results[0] || !data.results[0].generated_text) {
      console.error('Unexpected Watson AI response format:', data)
      throw new Error('Invalid response format from Watson AI')
    }

    const generatedText = data.results[0].generated_text.trim()

    return NextResponse.json({
      plan: generatedText,
      businessIdea,
      businessName,
      location: location || 'Michigan',
      businessType: businessType || 'To be determined',
    })

  } catch (error) {
    console.error('Business formation API error:', error)
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to generate business formation plan',
        fallback: true,
      },
      { status: 500 }
    )
  }
}

