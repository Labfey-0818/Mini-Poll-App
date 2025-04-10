import React, { useState } from 'react';
import './App.css';

function App() {
  const [pollOptions, setPollOptions] = useState([
    { text: 'Daddy Bron', votes: 0 },
    { text: 'Lebron', votes: 0 },
    { text: 'King James', votes: 0 }
  ]);

  const handleVote = (index) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index].votes += 1;
    setPollOptions(updatedOptions);
  };

  const getLeaders = () => {
    if (pollOptions.length === 0) return [];

    const maxVotes = Math.max(...pollOptions.map(opt => opt.votes));
    return pollOptions.filter(opt => opt.votes === maxVotes);
  };

  const leaders = getLeaders();

  return (
    <div className="poll-container">
      <h2 className="poll-question">Who is your favorite NBA player</h2>
      
      <div className="options-list">
        {pollOptions.map((option, index) => (
          <div key={index} className="poll-option">
            <span>{option.text}</span>
            <div>
              <button className="vote-button" onClick={() => handleVote(index)}>
                Vote
              </button>
              <span className="vote-count">{option.votes} votes</span>
            </div>
          </div>
        ))}
      </div>

      <div className="leader-display">
        <h3>Leading:</h3>
        {leaders.length > 0 ? (
          <ul>
            {leaders.map((leader, idx) => (
              <li key={idx}>
                👑 {leader.text} ({leader.votes} vote{leader.votes !== 1 ? 's' : ''})
              </li>
            ))}
          </ul>
        ) : (
          <p>No votes yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
