#!/bin/bash

# Test script to verify your Watson API key works
# Usage: ./test-watson-auth.sh YOUR_API_KEY

if [ -z "$1" ]; then
  echo "Usage: ./test-watson-auth.sh YOUR_API_KEY"
  echo "Or set it as environment variable: export API_KEY=your_key && ./test-watson-auth.sh"
  exit 1
fi

API_KEY=$1

echo "Testing API key exchange for IAM token..."
echo ""

# Exchange API key for IAM token
RESPONSE=$(curl -s -X POST 'https://iam.cloud.ibm.com/identity/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}")

# Check if we got an access token
if echo "$RESPONSE" | grep -q "access_token"; then
  echo "✅ SUCCESS! Your API key is valid."
  echo ""
  echo "Access token (first 50 chars):"
  echo "$RESPONSE" | grep -o '"access_token":"[^"]*' | cut -d'"' -f4 | head -c 50
  echo "..."
  echo ""
  echo "Token expires in:"
  echo "$RESPONSE" | grep -o '"expires_in":[0-9]*' | cut -d':' -f2
  echo "seconds"
else
  echo "❌ FAILED! Your API key is invalid or there was an error."
  echo ""
  echo "Error response:"
  echo "$RESPONSE"
  echo ""
  echo "Common issues:"
  echo "1. API key has extra spaces or quotes"
  echo "2. API key is expired or revoked"
  echo "3. API key doesn't have proper permissions"
fi
