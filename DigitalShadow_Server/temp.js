// // // import express, { Router } from 'express'
// // // import { google } from 'googleapis'
// // // import dotenv from 'dotenv';
// // // import cors from "cors";
// // // import { clerkMiddleware, clerkClient } from '@clerk/express'


// // // dotenv.config()
// // // const app = express()
// // // const port = 3000
// // // let token = null


// // // app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// // // app.use(clerkMiddleware())


// // // // Google auth Start
// // // const AuthClient = () => {
// // //     return new google.auth.OAuth2(
// // //         process.env.GoogleClientID,
// // //         process.env.Google_secret_key,
// // //         process.env.Google_Callback_url)
// // // }

// // // async function GoogleAuth(code) {
// // //     const token = await AuthClient().getToken(code)
// // //     AuthClient().setCredentials(token.tokens)
// // //     return token.tokens
// // // }
// // // // Google auth end




// // // // All function start



// // // async function GetData() {
// // //     const youtube = google.youtube({ version: "v3", auth: AuthClient() })
// // //     const response = await youtube.videos.list({
// // //         part: 'snippet,contentDetails',
// // //         myRating: 'like',
// // //         maxResults: 50
// // //     });
// // //     console.log(response)
// // // }
// // // // All function end



// // // // All Routes start
// // // app.get('/api/auth/callback/google', async (req, res) => {
// // //     const code = req.query.code
// // //     token = await GoogleAuth(code)
// // //     console.log(token)
// // //     res.send("Hii")
// // // })



// // // app.get("/", async (req, res) => {
// // //     //   let userId = req.auth.userId
// // //     //   let refresh_token = await FetchTokens(userId)
// // //     //   AuthClient.setCredentials({token})
// // //     //   await GetData()
// // //     console.log(await clerkClient.users.getUserList())

// // //     //   res.send("Upload successful")
// // // })
// // // // All Routes end





// // // app.listen(port, () => {
// // //     console.log(`Example app listening on port ${port}`)
// // // })



// // // import { GoogleGenAI } from "@google/genai";

// // // // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// // // const ai = new GoogleGenAI({apiKey: "AIzaSyCJ6iRPGjkCKA6gstd-LlMuPgvsdEU0Eq8"});

// // // async function main() {
// // //   const response = await ai.models.generateContent({
// // //     model: "gemini-3-flash-preview",
// // //     contents: "Hii intoduce yourself in two sentences.",
// // //   });
// // //   console.log(response.text);
// // // }

// // // main();











// // import { GoogleGenAI } from "@google/genai";

// // const ai = new GoogleGenAI({
// //   apiKey: "",
// // });

// // async function main() {
// //   const models = [
// //     "gemma-3-27b-it",
// //     "gemma-3-1b-it",
// //     "gemma-3-4b-it",
// //     "gemini-2.5-flash-lite",
// //     "gemini-2.5-flash",
// //     "gemini-3-flash-preview",
// //     "gemini-2.5-flash-tts"
// //   ];

// //   console.log("=".repeat(80));
// //   console.log(`Testing ${models.length} models`);
// //   console.log("=".repeat(80));
// //   console.log();

// //   const results = {
// //     successful: [],
// //     failed: []
// //   };

// //   for (let i = 0; i < models.length; i++) {
// //     const modelName = models[i];
// //     console.log(`[${i + 1}/${models.length}] Testing: ${modelName}`);
// //     console.log("-".repeat(80));

// //     try {
// //       const response = await ai.models.generateContent({
// //         model: modelName,
// //         contents: [
// //           {
// //             role: "user",
// //             parts: [
// //               { text: "Explain what is motor in 1 sentences." }
// //             ],
// //           },
// //         ],
// //       });

// //       const responseText = response.text;
// //       console.log(`✓ SUCCESS`);
// //       console.log(`Response: ${responseText}`);

// //       results.successful.push({
// //         model: modelName,
// //         response: responseText
// //       });

// //     } catch (error) {
// //       console.log(`✗ FAILED`);
// //       console.log(`Error: ${error.message}`);

// //       results.failed.push({
// //         model: modelName,
// //         error: error.message
// //       });
// //     }

// //     console.log();
// //   }

// //   // Summary
// //   console.log("=".repeat(80));
// //   console.log("SUMMARY");
// //   console.log("=".repeat(80));
// //   console.log(`Total Models Tested: ${models.length}`);
// //   console.log(`Successful: ${results.successful.length}`);
// //   console.log(`Failed: ${results.failed.length}`);
// //   console.log();

// //   if (results.successful.length > 0) {
// //     console.log("✓ SUCCESSFUL MODELS:");
// //     results.successful.forEach((item, idx) => {
// //       console.log(`  ${idx + 1}. ${item.model}`);
// //     });
// //     console.log();
// //   }

// //   if (results.failed.length > 0) {
// //     console.log("✗ FAILED MODELS:");
// //     results.failed.forEach((item, idx) => {
// //       console.log(`  ${idx + 1}. ${item.model} - ${item.error}`);
// //     });
// //     console.log();
// //   }

// //   return results;
// // }

// // main()
// //   .then((results) => {
// //     console.log("Testing completed!");
// //   })
// //   .catch((error) => {
// //     console.error("Fatal error:", error);
// //   });






// // export async function GetYoutubeData(refresh_token, access_token) {
// //     let AuthClientInstence = await AuthClient()
// //     AuthClientInstence.setCredentials({
// //         refresh_token: refresh_token,
// //         access_token: access_token
// //     })
// //     const youtube = google.youtube({ version: "v3", auth: AuthClientInstence })
// //     const YoutubeData = await youtube.videos.list({
// //         part: 'snippet,contentDetails',
// //         myRating: 'like',
// //         maxResults: 50
// //     });
// //     console.log(YoutubeData.data.items)
// // }





//  You are a data analysis system that analyzes a FULL DAY of YouTube watch history.
               
//                You will receive a list of videos watched in a single day.
//                Each video contains at least: title, channel name, duration, and watch time.
               
//                Your task is to analyze the ENTIRE DAY as ONE UNIT and produce a structured dashboard output.
//                Do NOT generate per-video summaries.
//                Do NOT repeat analysis multiple times.
//                Everything must be derived from the full-day dataset.
               
//                --------------------
//                STEP 1: DATA-DRIVEN CATEGORY DISCOVERY (MANDATORY)
//                --------------------
//                Discover the dominant content themes of the day directly from the video titles and channels.
               
//                Rules:
//                - Create BETWEEN 3 and 5 categories total.
//                - Categories MUST be inferred from the data, not pre-defined.
//                - Category names must be short, clear, and topic-based (e.g. "Cricket", "Web Development", "Physics", "Movies", "Shorts").
//                - Avoid vague labels like "Misc" unless absolutely necessary.
//                - Assign a numeric index to each category starting from 0.
               
//                --------------------
//                STEP 2: VIDEO → CATEGORY INDEX MAPPING
//                --------------------
//                For every video in the input:
//                - Assign exactly ONE categoryIndex based on its dominant topic.
//                - Preserve original video order.
//                - Do NOT add, remove, or reorder videos.
               
//                --------------------
//                STEP 3: CATEGORY STATISTICS
//                --------------------
//                For each discovered category:
//                - Calculate totalVideos.
//                - Calculate percentageOfTotal based on total videos watched that day.
               
//                Percentages must accurately sum to ~100%.
               
//                --------------------
//                STEP 4: PRODUCTIVITY TYPE CLASSIFICATION
//                --------------------
//                Independently classify each video into exactly ONE of the following types:
//                - Productive
//                - Study
//                - Time Pass
//                - Brain Rot
               
//                Rules:
//                - This classification is independent of topic categories.
//                - Use Brain Rot ONLY for low-effort, repetitive, or purely dopamine-driven content.
//                - Aggregate totals and percentages for each type.
               
//                --------------------
//                STEP 5: IMPORTANT NEWS EXTRACTION
//                --------------------
//                Extract IMPORTANT NEWS items from today’s videos.
               
//                Rules:
//                - News must be factual, informational, or update-based.
//                - Derive news only from watched content.
//                - Return results as a LIST.
//                - Each item must include: title, sourceCategory, and reason.
               
//                --------------------
//                STEP 6: IMPORTANT EVENTS DETECTION
//                --------------------
//                Detect meaningful behavioral EVENTS from today’s data.
               
//                Examples (not exhaustive):
//                - Category dominance
//                - Productivity spikes
//                - Focus consistency
//                - Unusual consumption patterns
               
//                Rules:
//                - Events must be insight-based, not video-based.
//                - Return results as a LIST.
//                - Each event must include a title and explanation.
               
//                --------------------
//                STEP 7: DAILY NARRATIVE SECTIONS (STRICT)
//                --------------------
//                Generate the following text sections:
               
//                1. Daily Summary  
//                   - EXACTLY 3 sentences.
               
//                2. Content Breakdown  
//                   - EXACTLY 3 sentences.
//                   - Must reference discovered category percentages.
               
//                3. Final Verdict  
//                   - EXACTLY 3 sentences.
//                   - Must evaluate focus, balance, and discipline.
               
//                Tone:
//                - Analytical
//                - Neutral
//                - Dashboard-style
//                - No emojis
//                - No slang
//                - No motivational fluff
               
//                --------------------
//                OUTPUT RULES (VERY IMPORTANT)
//                --------------------
//                - Return ONLY valid JSON.
//                - No markdown.
//                - No explanations.
//                - No extra keys.
//                - Sentence limits must be followed EXACTLY.
               
//                --------------------
//                REQUIRED OUTPUT SCHEMA
//                --------------------
//                {
//                  "categories": [
//                    {
//                      "index": number,
//                      "name": string,
//                      "totalVideos": number,
//                      "percentage": number
//                    }
//                  ],
//                  "videoCategoryMap": [
//                    {
//                      "videoIndex": number,
//                      "categoryIndex": number,
//                      "title": string
//                    }
//                  ],
//                  "productivityTypes": [
//                    {
//                      "type": "Productive" | "Study" | "Time Pass" | "Brain Rot",
//                      "totalVideos": number,
//                      "percentage": number
//                    }
//                  ],
//                  "importantNews": [
//                    {
//                      "title": string,
//                      "sourceCategory": string,
//                      "reason": string
//                    }
//                  ],
//                  "importantEvents": [
//                    {
//                      "title": string,
//                      "explanation": string
//                    }
//                  ],
//                  "dailySummary": string,
//                  "contentBreakdown": string,
//                  "finalVerdict": string
//                }
//                --------------------
//                INPUT DATA (FULL DAY WATCH HISTORY)
//                --------------------
//                ${JSON.stringify(youtubeData, null, 2)}
//                `;