import React, { useState, useEffect } from "react";
import "./Poll.css";

const Poll = ({ pollId, question, options }) => {
  // State to store votes and track user selection
  const [votes, setVotes] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Load saved votes from localStorage when the poll loads
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem(`poll-${pollId}`)) || new Array(options.length).fill(0);
    setVotes(storedVotes);
    setTotalVotes(storedVotes.reduce((sum, count) => sum + count, 0));
  }, [pollId, options]);

  // Handle user voting
  const handleVote = (index) => {
    if (selectedOption === null) {
      const updatedVotes = [...votes];
      updatedVotes[index] += 1;

      setVotes(updatedVotes);
      setSelectedOption(index);
      setTotalVotes(totalVotes + 1);
      setShowResults(true); // Show percentage after voting

      // Save updated votes to localStorage
      localStorage.setItem(`poll-${pollId}`, JSON.stringify(updatedVotes));
    }
  };

  // Calculate percentage for each option
  const getPercentage = (index) => {
    return totalVotes > 0 ? ((votes[index] / totalVotes) * 100).toFixed(1) + "%" : "0%";
  };

  return (
    <div className="poll-container">
      <div className="poll-card">
        <h2 className="poll-title">{question}</h2>
        <div className="poll-options">
          {options.map((option, index) => (
            <button
              key={index}
              className={`poll-button ${selectedOption === index ? "selected" : ""}`}
              onClick={() => handleVote(index)}
            >
              {option.text} {showResults ? `- ${getPercentage(index)}` : ""}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poll;
