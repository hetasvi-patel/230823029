import React, { useState } from 'react';
import './styles.css';

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Selected Answer:', selectedAnswer);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <div className="question-container">
        <h2>Question</h2>
        <p>
          What did Muhammad Ali (Cassius Clay at the time) wear while flying to
          Rome for the 1960 Games?
        </p>
        <div className="answer-options">
          <label>
            <input
              type="radio"
              value="His boxing gloves"
              checked={selectedAnswer === 'His boxing gloves'}
              onChange={() => handleAnswerChange('His boxing gloves')}
            />
            His boxing gloves
          </label>
          <label>
            <input
              type="radio"
              value="A parachute"
              checked={selectedAnswer === 'A parachute'}
              onChange={() => handleAnswerChange('A parachute')}
            />
            A parachute
          </label>
          <label>
            <input
              type="radio"
              value="Nothing"
              checked={selectedAnswer === 'Nothing'}
              onChange={() => handleAnswerChange('Nothing')}
            />
            Nothing
          </label>
          <label>
            <input
              type="radio"
              value="A world title belt"
              checked={selectedAnswer === 'A world title belt'}
              onChange={() => handleAnswerChange('A world title belt')}
            />
            A world title belt
          </label>
        </div>
      </div>
      <div className="feedback-container">
        <div>
          <h3>Correct Feedback</h3>
          <textarea placeholder="Type correct answer feedback here..." />
        </div>
        <div>
          <h3>Incorrect Feedback</h3>
          <textarea placeholder="Type incorrect answer feedback here..." />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Quiz;
