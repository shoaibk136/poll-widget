# 🗳️ Poll Widget

A simple and lightweight **React.js poll widget** that allows users to vote on customizable questions.  
This widget **does not use iframes**, stores votes in **local storage**, and is designed to be reusable across multiple pages.

---

## ✨ Features

-  **Configurable Questions** - Easily define different polls.
-  **Local Storage Support** - Votes persist even after a page refresh.
-  **Real-time Vote Percentage** - Users see results immediately after voting.
-  **Multiple Polls Support** - Can display multiple polls on the same page.
-  **Responsive & Animated** - Clean UI with smooth transitions.

---

## 🚀 Getting Started

### 1️⃣ Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/shoaibk136/poll-widget.git
cd poll-widget
npm install



2️⃣ Running the Project

npm run dev

The application will be available at http://localhost:5173 (since Vite is used).

Configuration

Defining Poll Questions
Polls can be configured in pollData.js:

const pollData = [
  {
    id: 1,
    question: "Which advertising strategy is most effective?",
    options: [
      { text: "Social Media Ads", votes: 0 },
      { text: "Search Engine Marketing", votes: 0 },
      { text: "Influencer Marketing", votes: 0 },
    ],
  },
  {
    id: 2,
    question: "What makes a great advertisement?",
    options: [
      { text: "Strong Visuals", votes: 0 },
      { text: "Engaging Story", votes: 0 },
      { text: "Clear Call to Action", votes: 0 },
    ],
  },
];

export default pollData;
Embedding the Poll Widget
To embed the widget, import the Poll component and pass poll data:


import Poll from "./Poll";
import pollData from "./pollData";

function App() {
  return (
    <div>
      {pollData.map((poll) => (
        <Poll key={poll.id} pollId={poll.id} question={poll.question} options={poll.options} />
      ))}
    </div>
  );
}
export default App;

 Styling & Animations
The styles are defined in Poll.css with hover effects and a smooth transition on vote selection.

 1 Hover Effect: Buttons change color when hovered.
 2 Selected Option Highlight: The chosen option is highlighted.
 3 Percentage Display: Appears only after the user votes.


📂 poll-widget
 ├── 📂 src
 │   ├── 📂 assets          # Static assets (images, icons)
 │   ├── 📂 components      # UI Components (Poll)
 │   │   ├── 📄 Poll.jsx
 │   │   ├── 📄 Poll.css
 │   ├── 📂 pages           # (If needed for routing)
 │   ├── 📂 utils           # Utility functions
 │   │   ├── 📄 localStorage.js
 │   ├── 📄 pollData.js     # Poll questions configuration
 │   ├── 📄 main.jsx        # React entry point
 │   ├── 📄 App.jsx         # Main App Component
 │   ├── 📄 styles.css      # Global styles
 │   ├── 📄 index.css       # Index styles
 ├── 📄 public/index.html   # Main HTML template
 ├── 📄 vite.config.js      # Vite configuration
 ├── 📄 package.json        # Project dependencies
 ├── 📄 README.md           # Documentation
 ├── 📄 .gitignore
 ├── 📄 eslint.config.js


- Notes
Users can vote again after a page refresh.
Local storage ensures votes persist across sessions.
The same poll cannot be displayed twice on the same page.


