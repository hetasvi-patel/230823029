import React, { useState } from 'react';
import './styles.css';

const QuestionItem = () => {
  const initialQuestion = {
    question: "Add your question here....",
    options: ["His boxing gloves", "A parachute", "Nothing", "A world title belt"],
    correctAnswers: ["A parachute"]
  };

  const [question, setQuestion] = useState(initialQuestion);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [showAddAnswer, setShowAddAnswer] = useState(false);
  const [correctFeedback, setCorrectFeedback] = useState('');
  const [incorrectFeedback, setIncorrectFeedback] = useState('');
  const [savedQuestions, setSavedQuestions] = useState([]);

  const handleCheckboxChange = (option) => {
    setAnswers((prevAnswers) => {
      if (prevAnswers.includes(option)) {
        return prevAnswers.filter((answer) => answer !== option);
      } else {
        return [...prevAnswers, option];
      }
    });
  };

  const handleAddAnswer = () => {
    if (newAnswer.trim() && !question.options.includes(newAnswer)) {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        options: [...prevQuestion.options, newAnswer]
      }));
      setNewAnswer('');
      setShowAddAnswer(false);
    }
  };

  const handleShowAddAnswer = () => {
    setShowAddAnswer(true);
  };

  const handleRemoveAnswer = (option) => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: prevQuestion.options.filter((answer) => answer !== option)
    }));
    setAnswers((prevAnswers) => prevAnswers.filter((answer) => answer !== option));
  };

  const handleQuestionChange = (e) => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      question: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (!correctFeedback.trim() || !incorrectFeedback.trim()) {
      alert("Both feedback fields are required.");
      return;
    }

    const questionWithFeedback = {
      ...question,
      correctFeedback,
      incorrectFeedback
    };

    setSavedQuestions((prevSavedQuestions) => [...prevSavedQuestions, questionWithFeedback]);
    console.log('Question:', questionWithFeedback);
    console.log('Selected Answers:', answers);
    console.log('Correct Feedback:', correctFeedback);
    console.log('Incorrect Feedback:', incorrectFeedback);
    // Here you can add the logic to save the data, e.g., send it to an API
  };

  const handleCancel = () => {
    setQuestion(initialQuestion);
    setAnswers([]);
    setNewAnswer('');
    setShowAddAnswer(false);
    setCorrectFeedback('');
    setIncorrectFeedback('');
  };

  const handleAddNewQuestion = () => {
    // Add logic here to save the current question before resetting
    handleSubmit();
    const newQuestionWithFeedback = {
      ...question,
      correctFeedback,
      incorrectFeedback
    };
    setSavedQuestions([newQuestionWithFeedback]); // Reset savedQuestions with only the new question
    setQuestion(initialQuestion);
    setAnswers([]);
    setNewAnswer('');
    setShowAddAnswer(false);
    setCorrectFeedback('');
    setIncorrectFeedback('');
  };

  return (
    <div className="container">
      <h1 className='text-start'>Quiz</h1>
      <div className="question-block">
        <input
          type="text"
          className="form-control bg-light mb-3"
          value={question.question}
          onChange={handleQuestionChange}
        />
        {question.options.map((option, index) => (
          <div key={index} className="question-block d-flex">
            <div className="input-group text-start">
              <div className="input-group-text">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={answers.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
              </div>
              <label className={`form-control ${answers.includes(option) ? 'option-selected' : ''}`}>
                {option}
              </label>
              </div>
              <button className="btn btn-outline-danger btn-sm mx-2 border-0" onClick={() => handleRemoveAnswer(option)}>X</button>
          </div>
        ))}
        <div className="add-answer-block">
          {showAddAnswer ? (
            <>
              <input
                className="form-control"
                type="text"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Add new answer"
              />
              <button className="btn btn-outline-primary" onClick={handleAddAnswer}>Add Answer</button>
            </>
          ) : (
           <div className='d-flex'>
           <button className="btn btn-outline-primary btn-sm border-0 rounded" onClick={handleShowAddAnswer}>+ add Answer </button>
           
           </div>
            
          )}
        </div>
        <hr />
        <div className="container gap-2 ">
        <div className='row'>
          <div className="feedback-item text-start">
            <h3>Correct Feedback</h3>
            <textarea
              className="form-control"
              placeholder="Type correct answer feedback here..."
              value={correctFeedback}
              onChange={(e) => setCorrectFeedback(e.target.value)}
              required
            />
          </div>
          <div className="feedback-item text-start">
            <h3>Incorrect Feedback</h3>
            <textarea
              className="form-control"
              placeholder="Type incorrect answer feedback here..."
              value={incorrectFeedback}
              onChange={(e) => setIncorrectFeedback(e.target.value)}
              required
            />
          </div>
          </div>  
        </div>
        <div className="button-container d-flex justify-content-center gap-2">
          <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
          <button className="btn btn-secondary" onClick={handleAddNewQuestion}>Add New Question</button>
          <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      
      {savedQuestions.length > 0 && (
        <div className="saved-questions mt-5 text-start">
          <h2 className='text-start'>Saved Questions</h2>
          {savedQuestions.map((savedQuestion, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body text-start">
                <h5 className="card-title text-left">{savedQuestion.question}</h5>
                <ul className="list-group text-left">
                  {savedQuestion.options.map((option, i) => (
                    <li className={`form-control mb-2 text-left ${answers.includes(option) ? 'selected-option' : ''}`} key={i}>{option}</li>
                  ))}
                </ul>
                <div>
                  <strong className="text-start">Correct Feedback:</strong>
                  <p>{savedQuestion.correctFeedback}</p>
                </div>
                <div>
                  <strong className=''>Incorrect Feedback:</strong>
                  <p>{savedQuestion.incorrectFeedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>      
  );
};

export default QuestionItem;
