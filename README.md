Watson AI Integration Setup Guide
This guide will help you connect IBM Watson AI to the compliance features of the Michigan Small Business Platform.

Prerequisites
An IBM Cloud account (sign up at https://cloud.ibm.com/)
Access to Watsonx.ai service
Step 1: Get Your Watson API Credentials
Log in to IBM Cloud: Go to https://cloud.ibm.com/ and sign in

Create or Access Watsonx.ai Project:

Navigate to Watsonx.ai in the IBM Cloud catalog
Create a new project or select an existing one
Note your Project ID (you'll need this)
Get Your API Key:

Go to your IBM Cloud account settings
Navigate to "Access (IAM)" > "API keys"
Create a new API key or use an existing one
Copy the API key (you won't be able to see it again)
Important: This API key will be automatically exchanged for an IAM access token (the code handles this for you)
Step 2: Configure Environment Variables
Copy the example environment file:

cp .env.example .env.local
Edit .env.local and add your credentials:

WATSON_API_KEY=your_actual_api_key_here
WATSON_PROJECT_ID=your_actual_project_id_here
Optional Configuration:

WATSON_URL: The Watson API endpoint (defaults to https://us-south.ml.cloud.ibm.com)
WATSON_MODEL_ID: The model to use (defaults to ibm/granite-13b-instruct-v2)
Step 3: Available Watson Models
You can use different IBM Granite models:

ibm/granite-13b-instruct-v2 (default) - Good balance of quality and speed
ibm/granite-8b-instruct-v2 - Faster, smaller model
ibm/granite-20b-instruct-v2 - More powerful, slower
To use a different model, set WATSON_MODEL_ID in your .env.local file.

Step 4: Test the Integration
Start your development server:

npm run dev
# or
pnpm dev
Navigate to the Compliance page: http://localhost:3000/compliance

Test the Q&A Assistant:

Ask a compliance question
You should receive an AI-generated response from Watson
Test the Permit Checker:

Enter a business idea and location
You should receive an AI-generated permit analysis
Troubleshooting
Authentication Errors
If you see authentication_token_not_valid errors:

Check API Key Format: Make sure your API key doesn't have extra spaces or quotes
Verify API Key: The API key should start with a string of characters (not a URL)
IAM Token Exchange: The code automatically exchanges your API key for an IAM token. If this fails, check:
Your API key is valid and active in IBM Cloud
You have proper IAM permissions
Your network can reach https://iam.cloud.ibm.com
API Errors
If you see errors in the console:

401 Unauthorized / authentication_token_not_valid:
Your API key may be invalid or expired
Try regenerating your API key in IBM Cloud
Make sure there are no extra spaces in your .env.local file
404 Not Found: Verify your WATSON_PROJECT_ID is correct
500 Internal Server Error: Check that your project has access to the selected model
Fallback Mode
If Watson AI is unavailable or misconfigured, the application will automatically fall back to mock responses. Check your browser console for error messages.

Model Access
Some models may require specific access permissions. If you get model access errors:

Check your IBM Cloud project settings
Ensure the model is available in your region
Verify your account has the necessary permissions
API Endpoints
The integration creates two API endpoints:

POST /api/compliance/qa: Handles compliance Q&A questions

Body: { question: string, category: string }
Returns: { response: string, requiresLegalReview: boolean }
POST /api/compliance/permit: Analyzes business ideas for permit requirements

Body: { businessIdea: string, businessLocation: string }
Returns: { requiredPermits: string[], countyConsiderations: string[], costs: array, steps: array, missingDocuments: array }
Security Notes
Never commit your .env.local file to version control
Keep your API keys secure and rotate them regularly
Use environment-specific keys for development and production
Additional Resources
IBM Watsonx.ai Documentation
Watsonx.ai API Reference
IBM Granite Models
