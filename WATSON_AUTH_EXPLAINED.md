# Watson Authentication - Simple Explanation

## TL;DR: You Don't Need to Convert Anything!

The code **automatically** converts your API key to an IAM token. Just put your IBM Cloud API key in `.env.local` and you're done!

## How It Works

```
Your API Key (in .env.local)
    ↓
[Automatic Conversion - You don't do this!]
    ↓
IAM Access Token (used automatically)
    ↓
Watsonx.ai API Calls
```

## What You Need

1. **IBM Cloud API Key** - Get this from:
   - IBM Cloud Dashboard → Access (IAM) → API keys
   - This is a long string that looks like: `abc123xyz789...`

2. **Put it in `.env.local`**:
   ```
   WATSON_API_KEY=abc123xyz789...
   WATSON_PROJECT_ID=your-project-id
   ```

3. **That's it!** The code handles everything else automatically.

## Testing Your API Key

If you want to verify your API key works, you can:

### Option 1: Use the test script
```bash
./test-watson-auth.sh YOUR_API_KEY
```

### Option 2: Test manually with curl
```bash
curl -X POST 'https://iam.cloud.ibm.com/identity/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=YOUR_API_KEY'
```

If you get back a JSON response with `access_token`, your API key is valid!

## Common Questions

**Q: Do I need to manually get an IAM token?**  
A: No! The code does this automatically.

**Q: Do I need a different type of key?**  
A: No! Just use your regular IBM Cloud API key from IAM.

**Q: How long does the token last?**  
A: IAM tokens last 1 hour, but the code automatically refreshes them when needed.

**Q: Where does the conversion happen?**  
A: In `lib/watson-auth.ts` - you don't need to look at this, it just works!

## Troubleshooting

If you're getting authentication errors:

1. **Check your API key format**:
   - No quotes around it: `WATSON_API_KEY=abc123` ✅
   - Not: `WATSON_API_KEY="abc123"` ❌
   - No spaces: `WATSON_API_KEY=abc123` ✅
   - Not: `WATSON_API_KEY = abc123` ❌

2. **Test your API key**:
   ```bash
   ./test-watson-auth.sh YOUR_API_KEY
   ```

3. **Make sure you restarted your dev server** after adding `.env.local`

4. **Check the server console** - you should see logs about token exchange
