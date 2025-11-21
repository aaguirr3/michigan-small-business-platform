/**
 * Helper functions for IBM Watson IAM Authentication
 * Watsonx.ai requires IAM tokens instead of direct API key usage
 */

interface IAMTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  expiration: number
  refresh_token?: string
}

let cachedToken: { token: string; expiresAt: number } | null = null

/**
 * Get IAM access token from IBM Cloud using API key
 * Tokens are cached and reused until they expire (1 hour)
 */
export async function getIAMToken(apiKey: string): Promise<string> {
  // Check if we have a valid cached token
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60000) {
    // Return cached token if it has at least 1 minute left
    return cachedToken.token
  }

  try {
    // Exchange API key for IAM token
    const response = await fetch('https://iam.cloud.ibm.com/identity/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ibm:params:oauth:grant-type:apikey',
        apikey: apiKey,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to get IAM token: ${response.status} ${response.statusText} - ${errorText}`)
    }

    const data: IAMTokenResponse = await response.json()

    // Cache the token (expires in 1 hour, but we'll refresh 5 minutes early)
    cachedToken = {
      token: data.access_token,
      expiresAt: Date.now() + (data.expires_in - 300) * 1000, // 5 min buffer
    }

    return data.access_token
  } catch (error) {
    console.error('Error getting IAM token:', error)
    throw error
  }
}

/**
 * Clear cached token (useful for testing or when API key changes)
 */
export function clearTokenCache() {
  cachedToken = null
}
