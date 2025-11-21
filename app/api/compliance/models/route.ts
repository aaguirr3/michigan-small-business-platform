import { NextResponse } from 'next/server'
import { getIAMToken } from '@/lib/watson-auth'

/**
 * API endpoint to list available Watson models
 * This helps you find which models are available in your project
 */
export async function GET() {
  try {
    const watsonApiKey = process.env.WATSON_API_KEY
    const watsonUrl = process.env.WATSON_URL || 'https://us-south.ml.cloud.ibm.com'
    const watsonProjectId = process.env.WATSON_PROJECT_ID

    if (!watsonApiKey || !watsonProjectId) {
      return NextResponse.json(
        {
          error: 'Watson AI configuration missing. Please set WATSON_API_KEY and WATSON_PROJECT_ID environment variables.',
        },
        { status: 500 }
      )
    }

    // Get IAM access token
    const accessToken = await getIAMToken(watsonApiKey)

    // List available models
    const response = await fetch(`${watsonUrl}/ml/v1/foundation_models?version=2024-11-19`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        {
          error: `Failed to list models: ${response.status} ${response.statusText}`,
          details: errorText,
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Filter to show only text generation models
    const textModels = data.resources?.filter((model: any) => 
      model.supported_generation_methods?.includes('text') ||
      model.model_id?.includes('granite') ||
      model.model_id?.includes('llama') ||
      model.model_id?.includes('mistral')
    ) || []

    return NextResponse.json({
      success: true,
      totalModels: data.resources?.length || 0,
      textGenerationModels: textModels.map((model: any) => ({
        model_id: model.model_id,
        name: model.label || model.model_id,
        description: model.short_description || '',
        supportedMethods: model.supported_generation_methods || [],
      })),
      allModels: data.resources?.map((model: any) => ({
        model_id: model.model_id,
        label: model.label,
      })) || [],
    })
  } catch (error) {
    console.error('Error listing models:', error)
    return NextResponse.json(
      {
        error: 'Failed to list models',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
