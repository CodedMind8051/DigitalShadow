<div align="center">

# 🌑 DigitalShadow  

### *Your YouTube history, decoded.*

Turn your YouTube watch history into a **daily mirror of your mind**.  
See what you learned, what distracted you, and where your time really went.

</div>

---

## 🧠 What is DigitalShadow?

DigitalShadow is a web app that connects to your YouTube account and uses AI to analyze what you watched.  
It classifies your viewing into **learning, entertainment, news, and distraction**, then generates insights about your **focus, habits, and productivity**.

It doesn't block YouTube.  
It shows you the truth behind it.

---

## ✨ Features

- 🔐 Google login with YouTube access  
- 📺 Reads YouTube watch history  
- 🤖 AI-based video categorization  
- ⏱️ Time tracking per content type  
- 📊 Daily productivity score  
- 🎨 Clean visual dashboard  
- 📝 AI-generated daily summary  

---

## ⚙️ How It Works

1. User signs in with Google  
2. App fetches YouTube watch history  
3. Video titles and channels are sent to AI  
4. AI classifies each video  
5. Time and category data is processed  
6. A daily report is generated and displayed  

---

## 🛠 Tech Stack

### Frontend
- Vite  
- React  
- Tailwind CSS  
- Chart.js  

### Backend
- Node.js  
- Express  
- MongoDB  
- YouTube Data API  
- OpenAI API  

---

## 📁 Project Structure
```
DigitalShadow/
├── client/          # Vite + React frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── server/          # Node.js + Express backend
    ├── routes/
    ├── models/
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- Google Cloud Console account
- OpenAI API key

### 1. Clone the repository
```bash
git clone https://github.com/your-username/DigitalShadow.git
cd DigitalShadow
```

---

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```env
PORT=5000
YOUTUBE_API_KEY=your_youtube_api_key
OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
```

Start the backend:
```bash
npm run dev
```

---

### 3. Setup Frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `client/`:
```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Start the frontend:
```bash
npm run dev
```

The app will run on:
```
Frontend: http://localhost:5173
Backend: http://localhost:5000
```

---

## 📊 Example Output
```
📚 Learning: 42 minutes
🎬 Entertainment: 1 hour
⏰ Distraction: 35 minutes

AI Summary:
"You spent most of your time on entertainment today. 
Your focus peaked in the morning and dropped after 5 PM."
```

---

## 🔮 Future Ideas

- [ ] Weekly and monthly reports
- [ ] Chrome extension
- [ ] Channel blacklisting
- [ ] AI habit coach
- [ ] Focus streaks
- [ ] Comparison with friends
- [ ] Export reports as PDF

---

## 🏁 Built For

DigitalShadow was built for a hackathon to explore how **AI + personal data** can help people understand and improve their digital habits.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📜 License

MIT License

---

<div align="center">

THink , design and buid by Coded_mind__

**[⭐ Star this repo](https://github.com/your-username/DigitalShadow)** if you found it useful!

</div>
