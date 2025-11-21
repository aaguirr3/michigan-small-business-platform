import { NextResponse } from 'next/server'

/**
 * Debug endpoint to check Watson AI configuration
 * This helps verify that environment variables are loaded correctly
 */
export async function GET() {
  const watsonApiKey = process.env.WATSON_API_KEY
  const watsonUrl = process.env.WATSON_URL || 'https://us-south.ml.cloud.ibm.com'
  const watsonProjectId = process.env.WATSON_PROJECT_ID
  const watsonModelId = process.env.WATSON_MODEL_ID || 'ibm/granite-13b-instruct-v2'

  // Don't expose full API key in response, just show if it exists
  const config = {
    hasApiKey: !!watsonApiKey,
    apiKeyLength: watsonApiKey?.length || 0,
    apiKeyPrefix: watsonApiKey ? watsonApiKey.substring(0, 8) + '...' : 'Not set',
    hasProjectId: !!watsonProjectId,
    projectId: watsonProjectId ? watsonProjectId.substring(0, 8) + '...' : 'Not set',
    url: watsonUrl,
    modelId: watsonModelId,
    isConfigured: !!(watsonApiKey && watsonProjectId),
  }

  return NextResponse.json({
    message: 'Watson AI Configuration Status',
    config,
    instructions: config.isConfigured
      ? '✅ Configuration looks good! Try asking a question on the compliance page.'
      : '❌ Configuration missing. Please set WATSON_API_KEY and WATSON_PROJECT_ID in .env.local and restart your dev server.',
  })
}
