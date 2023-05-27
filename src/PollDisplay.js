
import React, { useState } from 'react';

const PollDisplay = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'JavaScript', votes: 0 },
    { id: 2, text: 'Java', votes: 0 },
    { id: 3, text: 'Python', votes: 0 },
    { id: 4, text: 'C#', votes: 0 },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (event) => {
    const optionId = parseInt(event.target.value);
    setSelectedOption(optionId);

    const updatedOptions = options.map((option) => {
      if (option.id === optionId) {
        return {
          ...option,
          votes: option.votes + 1,
        };
      } else if (option.id === selectedOption) {
        return {
          ...option,
          votes: option.votes - 1,
        };
      }
      return option;
    });

    setOptions(updatedOptions);
  };

  return (
    <div>
      <h2>Polling App</h2>
      <h3>What is your favourite programming language?</h3>
       <h4>Answer Choices with vote counts</h4>
      <ol>
        {options.map((option) => (
          <li key={option.id}>
            <label>
              <input
                type="radio"
                name="voteOption"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={handleVote}
              />
              {option.text}
            </label>
            <span>Votes: {option.votes}</span>
          </li>
        ))}
      </ol>
    </div>
    
  );
  
};

const ThankYouMessage = () => {
    // options.forEach((option) => {
    //   console.log(`Option ${option.id}: Votes - ${option.votes}`);
    // });
  };

  export default PollDisplay; 
