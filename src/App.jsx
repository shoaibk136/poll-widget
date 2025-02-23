import React, { useState } from "react";
import Poll from "./components/Poll";
import pollData from "./pollData"; 
import "./App.css";

const App = () => {
  const [activePoll, setActivePoll] = useState(0);

  return (
    <div className="app-container">
      <h1 className="app-heading">Polls</h1>
      <div className="button-group">
        {pollData.map((poll, index) => (
          <button
            key={poll.id}
            className={`toggle-button ${activePoll === index ? "active" : ""}`}
            onClick={() => setActivePoll(index)}
          >
            Show Poll {index + 1}
          </button>
        ))}
      </div>
      <Poll
        key={pollData[activePoll].id}
        pollId={pollData[activePoll].id}
        question={pollData[activePoll].question}
        options={pollData[activePoll].options}
      />
    </div>
  );
};

export default App;
