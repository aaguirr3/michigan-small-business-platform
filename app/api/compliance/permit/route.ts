import { NextRequest, NextResponse } from 'next/server'
import { getIAMToken } from '@/lib/watson-auth'

/**
 * API Route for Watson AI Permit Analysis
 * This endpoint analyzes business ideas and provides permit requirements using IBM Watson AI
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessIdea, businessLocation } = body

    if (!businessIdea || typeof businessIdea !== 'string') {
      return NextResponse.json(
        { error: 'Business idea is required' },
        { status: 400 }
      )
    }

    // Get Watson AI credentials from environment variables
    const watsonApiKey = process.env.WATSON_API_KEY
    const watsonUrl = process.env.WATSON_URL || 'https://us-south.ml.cloud.ibm.com'
    const watsonProjectId = process.env.WATSON_PROJECT_ID
    // Model ID - user MUST set WATSON_MODEL_ID in .env.local
    // Visit /api/compliance/models to see available models
    const watsonModelId = process.env.WATSON_MODEL_ID

    if (!watsonApiKey || !watsonProjectId) {
      return NextResponse.json(
        { 
          error: 'Watson AI configuration missing. Please set WATSON_API_KEY and WATSON_PROJECT_ID environment variables.',
          fallback: true 
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

    // Build the prompt for permit analysis
    const systemPrompt = `You are an expert AI assistant specializing in Michigan business permits, licenses, and regulatory requirements.
Analyze business ideas and provide comprehensive permit requirements, costs, steps, and documentation needs.
Format your response as a JSON object with the following structure:
{
  "requiredPermits": ["permit1", "permit2"],
  "countyConsiderations": ["consideration1", "consideration2"],
  "costs": [{"item": "item1", "cost": "$X - $Y"}],
  "steps": ["step1", "step2"],
  "missingDocuments": ["doc1", "doc2"]
}
Focus on Michigan-specific requirements and be specific about costs and steps.`

    const userPrompt = `Business Idea: ${businessIdea}\nLocation: ${businessLocation || 'Michigan'}\n\nAnalyze this business idea and provide a comprehensive permit analysis in JSON format.`

    // Get IAM access token from API key
    let accessToken: string
    try {
      accessToken = await getIAMToken(watsonApiKey)
    } catch (tokenError) {
      console.error('Failed to get IAM token:', tokenError)
      return NextResponse.json({
        ...generateFallbackPermitAnalysis(businessIdea, businessLocation),
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
          max_new_tokens: 1000,
          min_new_tokens: 100,
          temperature: 0.2, // Lower temperature for structured responses
          top_p: 0.9,
          repetition_penalty: 1.1,
        },
        system_prompt: systemPrompt,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Watson AI API Error:', errorData)
      
      // Return fallback response if API fails
      return NextResponse.json({
        ...generateFallbackPermitAnalysis(businessIdea, businessLocation),
        fallback: true,
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

    // Try to parse JSON from the response
    let permitAnalysis
    try {
      // Extract JSON from the response (might be wrapped in markdown code blocks)
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        permitAnalysis = JSON.parse(jsonMatch[0])
      } else {
        throw new Error('No JSON found in response')
      }
    } catch (parseError) {
      // If parsing fails, use fallback
      console.error('Failed to parse Watson AI response:', parseError)
      permitAnalysis = generateFallbackPermitAnalysis(businessIdea, businessLocation)
    }

    // Ensure all required fields exist
    const result = {
      requiredPermits: permitAnalysis.requiredPermits || [],
      countyConsiderations: permitAnalysis.countyConsiderations || [],
      costs: permitAnalysis.costs || [],
      steps: permitAnalysis.steps || [],
      missingDocuments: permitAnalysis.missingDocuments || [],
      fallback: false,
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error calling Watson AI:', error)
    
    // Return fallback response on error
    const body = await request.json().catch(() => ({}))
    return NextResponse.json({
      ...generateFallbackPermitAnalysis(body.businessIdea || '', body.businessLocation || ''),
      fallback: true,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

// Fallback permit analysis generator (used when Watson AI is unavailable)
function generateFallbackPermitAnalysis(idea: string, location: string) {
  const ideaLower = idea.toLowerCase()
  const locationLower = (location || '').toLowerCase()
  const isRural = locationLower.includes('rural') || (!locationLower.includes('detroit') && !locationLower.includes('grand rapids'))
  
  const permits: string[] = []
  const countyConsiderations: string[] = []
  const costs: { item: string; cost: string }[] = []
  const steps: string[] = []
  const missingDocs: string[] = []

  // Business License (always required)
  permits.push('Michigan Business License')
  costs.push({ item: 'Business License', cost: '$50 - $200' })
  steps.push('Register your business name with the Michigan Department of Licensing and Regulatory Affairs (LARA)')
  missingDocs.push('Business name registration form')

  // Industry-specific permits
  if (ideaLower.includes('food') || ideaLower.includes('restaurant') || ideaLower.includes('food truck')) {
    permits.push('Food Service License')
    permits.push('Food Safety Certification')
    permits.push('Mobile Food Vendor Permit (if applicable)')
    costs.push({ item: 'Food Service License', cost: '$200 - $500' })
    costs.push({ item: 'Food Safety Certification', cost: '$100 - $300' })
    steps.push('Complete ServSafe or equivalent food safety training')
    steps.push('Pass health department inspection')
    missingDocs.push('Food safety certificate')
    missingDocs.push('Menu and food handling procedures')
  }

  if (ideaLower.includes('alcohol') || ideaLower.includes('bar') || ideaLower.includes('liquor')) {
    permits.push('Michigan Liquor License')
    costs.push({ item: 'Liquor License', cost: '$600 - $5,000+' })
    steps.push('Apply through Michigan Liquor Control Commission')
    steps.push('Complete background check and fingerprinting')
    missingDocs.push('Liquor license application')
    missingDocs.push('Background check results')
  }

  if (ideaLower.includes('retail') || ideaLower.includes('store') || ideaLower.includes('shop')) {
    permits.push('Sales Tax License')
    costs.push({ item: 'Sales Tax License', cost: 'Free' })
    steps.push('Register for sales tax with Michigan Department of Treasury')
    missingDocs.push('Sales tax registration form')
  }

  if (ideaLower.includes('healthcare') || ideaLower.includes('medical') || ideaLower.includes('clinic')) {
    permits.push('Healthcare Facility License')
    permits.push('Professional Licensing (if applicable)')
    costs.push({ item: 'Healthcare License', cost: '$500 - $2,000' })
    steps.push('Apply through Michigan Department of Health and Human Services')
    missingDocs.push('Professional licenses for staff')
    missingDocs.push('Facility inspection report')
  }

  if (ideaLower.includes('childcare') || ideaLower.includes('daycare')) {
    permits.push('Childcare License')
    permits.push('Background Checks (all staff)')
    costs.push({ item: 'Childcare License', cost: '$200 - $500' })
    steps.push('Complete childcare licensing application')
    steps.push('Pass home/facility safety inspection')
    missingDocs.push('Background checks for all staff')
    missingDocs.push('Safety inspection report')
  }

  // Zoning and location
  if (ideaLower.includes('home') || ideaLower.includes('residential')) {
    permits.push('Home Occupation Permit')
    countyConsiderations.push('Check local zoning ordinances for home-based businesses')
    steps.push('Verify your property is zoned for business use')
    missingDocs.push('Property deed or lease agreement')
  }

  permits.push('Zoning Permit')
  costs.push({ item: 'Zoning Permit', cost: '$50 - $300' })
  steps.push('Verify property zoning compliance with local planning department')
  missingDocs.push('Property address and zoning verification')

  // County-specific considerations
  if (isRural) {
    countyConsiderations.push('Rural counties may have simplified permit processes')
    countyConsiderations.push('Check with county clerk for local business registration requirements')
    countyConsiderations.push('Some rural areas offer reduced fees for new businesses')
  } else {
    countyConsiderations.push('Urban areas may require additional permits (signage, parking, etc.)')
    countyConsiderations.push('Check city-specific business requirements')
  }

  // EIN and tax
  permits.push('Federal EIN (Employer Identification Number)')
  costs.push({ item: 'EIN Registration', cost: 'Free' })
  steps.push('Apply for EIN through IRS (can be done online)')
  missingDocs.push('EIN application (SS-4 form)')

  // Employment considerations
  if (ideaLower.includes('employ') || ideaLower.includes('hire') || ideaLower.includes('staff')) {
    permits.push("Workers' Compensation Insurance")
    permits.push('Unemployment Insurance Registration')
    costs.push({ item: "Workers' Comp Insurance", cost: '$500 - $2,000/year' })
    steps.push('Register with Michigan Department of Labor and Economic Opportunity')
    missingDocs.push('Workers\' compensation policy')
  }

  return {
    requiredPermits: permits,
    countyConsiderations: countyConsiderations,
    costs: costs,
    steps: steps,
    missingDocuments: missingDocs,
  }
}
