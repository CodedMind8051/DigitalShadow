// import express, { Router } from 'express'
// import { google } from 'googleapis'
// import dotenv from 'dotenv';
// import cors from "cors";
// import { clerkMiddleware, clerkClient } from '@clerk/express'


// dotenv.config()
// const app = express()
// const port = 3000
// let token = null


// app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// app.use(clerkMiddleware())


// // Google auth Start
// const AuthClient = () => {
//     return new google.auth.OAuth2(
//         process.env.GoogleClientID,
//         process.env.Google_secret_key,
//         process.env.Google_Callback_url)
// }

// async function GoogleAuth(code) {
//     const token = await AuthClient().getToken(code)
//     AuthClient().setCredentials(token.tokens)
//     return token.tokens
// }
// // Google auth end




// // All function start



// async function GetData() {
//     const youtube = google.youtube({ version: "v3", auth: AuthClient() })
//     const response = await youtube.videos.list({
//         part: 'snippet,contentDetails',
//         myRating: 'like',
//         maxResults: 50
//     });
//     console.log(response)
// }
// // All function end



// // All Routes start
// app.get('/api/auth/callback/google', async (req, res) => {
//     const code = req.query.code
//     token = await GoogleAuth(code)
//     console.log(token)
//     res.send("Hii")
// })



// app.get("/", async (req, res) => {
//     //   let userId = req.auth.userId
//     //   let refresh_token = await FetchTokens(userId)
//     //   AuthClient.setCredentials({token})
//     //   await GetData()
//     console.log(await clerkClient.users.getUserList())

//     //   res.send("Upload successful")
// })
// // All Routes end





// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })



// import { GoogleGenAI } from "@google/genai";

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({apiKey: "AIzaSyCJ6iRPGjkCKA6gstd-LlMuPgvsdEU0Eq8"});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Hii intoduce yourself in two sentences.",
//   });
//   console.log(response.text);
// }

// main();











import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCJ6iRPGjkCKA6gstd-LlMuPgvsdEU0Eq8",
});

async function main() {
  const models = [
    "gemma-3-27b-it",
    "gemma-3-1b-it",
    "gemma-3-4b-it",
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-3-flash-preview",
    "gemini-2.5-flash-tts"
  ];

  console.log("=".repeat(80));
  console.log(`Testing ${models.length} models`);
  console.log("=".repeat(80));
  console.log();

  const results = {
    successful: [],
    failed: []
  };

  for (let i = 0; i < models.length; i++) {
    const modelName = models[i];
    console.log(`[${i + 1}/${models.length}] Testing: ${modelName}`);
    console.log("-".repeat(80));

    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          {
            role: "user",
            parts: [
              { text: "Explain what is motor in 1 sentences." }
            ],
          },
        ],
      });

      const responseText = response.text;
      console.log(`✓ SUCCESS`);
      console.log(`Response: ${responseText}`);

      results.successful.push({
        model: modelName,
        response: responseText
      });

    } catch (error) {
      console.log(`✗ FAILED`);
      console.log(`Error: ${error.message}`);

      results.failed.push({
        model: modelName,
        error: error.message
      });
    }

    console.log();
  }

  // Summary
  console.log("=".repeat(80));
  console.log("SUMMARY");
  console.log("=".repeat(80));
  console.log(`Total Models Tested: ${models.length}`);
  console.log(`Successful: ${results.successful.length}`);
  console.log(`Failed: ${results.failed.length}`);
  console.log();

  if (results.successful.length > 0) {
    console.log("✓ SUCCESSFUL MODELS:");
    results.successful.forEach((item, idx) => {
      console.log(`  ${idx + 1}. ${item.model}`);
    });
    console.log();
  }

  if (results.failed.length > 0) {
    console.log("✗ FAILED MODELS:");
    results.failed.forEach((item, idx) => {
      console.log(`  ${idx + 1}. ${item.model} - ${item.error}`);
    });
    console.log();
  }

  return results;
}

main()
  .then((results) => {
    console.log("Testing completed!");
  })
  .catch((error) => {
    console.error("Fatal error:", error);
  });