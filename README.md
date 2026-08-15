# 🚀 Express REST API — Bootcamp Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-online-brightgreen?style=for-the-badge&logo=render)](https://web-dev-bootcamp-re26.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

A bootcamp project focused on building a **REST API with Node.js and Express**, connecting it to a vanilla JS frontend, and deploying the full stack to the cloud.

---

## 🔗 Live Demo

👉 [https://web-dev-bootcamp-re26.onrender.com](https://web-dev-bootcamp-re26.onrender.com)

| Page | Link |
|------|------|
| 🏠 Home | [Open](https://web-dev-bootcamp-re26.onrender.com) |
| 🟨 LeetStats | [Open](https://web-dev-bootcamp-re26.onrender.com/leetcode-stats.html) |
| 🔵 Codeforces Insights | [Open](https://web-dev-bootcamp-re26.onrender.com/codeforces-stats.html) |
| 🐙 GitPulse | [Open](https://web-dev-bootcamp-re26.onrender.com/gitpulse.html) |
| ✨ Ask Gemini | [Open](https://web-dev-bootcamp-re26.onrender.com/ask-gemini.html) |

---

## ⚙️ REST API

An in-memory Users CRUD API built with Express 5.

**Base URL:** `https://web-dev-bootcamp-re26.onrender.com`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | List all users |
| `GET` | `/api/users/:id` | Get user by ID |
| `GET` | `/api/randomuser` | Get a random user |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update a user |
| `DELETE` | `/api/users/:id` | Delete a user |

**User schema:**
```json
{
  "id": 1,
  "name": "john",
  "gender": "male",
  "image": "https://randomuser.me/api/portraits/men/18.jpg"
}
```

---

## 🏠 Home — User Card

A frontend that consumes the Users API above.

- **Toggle User** — cycles through users fetched from the local API
- **My Random User** — picks a random user from the local API
- **Random User** — fetches from the public [randomuser.me](https://randomuser.me) API

---

## 🛠️ Additional Tools

A set of developer stat tools included in the project, each built as a standalone HTML page.

### 🟨 LeetStats
- Visualize any LeetCode profile — total solved, Easy/Medium/Hard breakdown, global ranking
- Animated ring chart and progress bars
- Tries multiple public APIs with automatic fallback
- Light / dark theme

### 🔵 Codeforces Insights
- Full analytics for any Codeforces handle using the official API
- Rating trajectory chart, solved by difficulty & tag, verdict breakdown
- 12-month submission heatmap and recent contest table
- Light / dark theme

### 🐙 GitPulse
- GitHub portfolio analyzer — profile stats, language radar, top repos, weekly activity
- 52-week contribution heatmap
- AI-generated developer persona via Claude (Anthropic)

### ✨ Ask Gemini
- Streaming chat client powered by the Gemini API — no backend required
- Renders full Markdown responses using `marked` + `DOMPurify`
- API key stored only in `localStorage`
- Light / dark theme

---

## 💡 What I Learned

- Setting up an Express server and serving static files
- Building RESTful API endpoints (GET, POST, PUT, DELETE)
- Handling JSON request bodies with `express.json()`
- Connecting a vanilla JS frontend to a backend using `fetch`
- Deploying a Node.js app on **Render**

---

## 🚀 Running Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/jahnavi-yenumula/Web-dev-bootcamp.git
cd Web-dev-bootcamp

# 2. Install dependencies
npm install

# 3. Start the server
node server.js
```

Open **http://localhost:8080** in your browser.

---

## 📁 Project Structure

```
├── frontend/
│   ├── index.html              # Home — user card
│   ├── index.js                # Frontend fetch logic
│   ├── style.css               # Styles
│   ├── leetcode-stats.html     # LeetCode stats tool
│   ├── codeforces-stats.html   # Codeforces analytics tool
│   ├── gitpulse.html           # GitHub portfolio analyzer
│   └── ask-gemini.html         # Gemini streaming chat
├── server.js                   # Express server + REST API
└── package.json
```

---

## 🧰 Tech Stack

| | Technology |
|-|-----------|
| Backend | Node.js, Express 5 |
| Frontend | Vanilla HTML, CSS, JavaScript |
| Charts | Chart.js |
| Markdown | marked, DOMPurify |
| AI | Google Gemini API, Anthropic Claude API |
| External Data | Codeforces API, GitHub REST API, LeetCode stats APIs |
| Hosting | Render |
