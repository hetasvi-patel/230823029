import React, { useState } from 'react';
import QuestionItem from './QuestionItem';

function QuestionBank() {
  const [questions, setQuestions] = useState([]);

  // ... previous code

  const handleSelectAnswer = (questionId, answerText) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, options: question.options.map((option) => (option.text === answerText ? { ...option, isSelected: true } : option))}
          : question
      )
    );
  };
  
  const handleAddAnswer = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, options: [...question.options, { text: '', isSelected: false }] }
          : question
      )
    );
  };
  
  const handleUpdateFeedback = (questionId, feedback, isCorrect) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              ...(isCorrect ? { correctFeedback: feedback } : { incorrectFeedback: feedback }),
            }
          : question
      )
    );
  };
  
  const handleSaveQuestion = (question) => {
    // Implement your logic to save the question data (e.g., to local storage or backend API)
    console.log('Saving question:', question); // Placeholder for now
  };
  
  const handleCancelQuestion = (question) => {
    // Find the original question data (assuming you have a way to store it)
    const originalQuestion = /* ... find original question data */
  
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === question.id ? originalQuestion : q))
    );
  };

  return (
    <div className="question-bank">
      
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          onSelectAnswer={handleSelectAnswer}
          onAddAnswer={handleAddAnswer}
          onUpdateFeedback={handleUpdateFeedback}
          onSaveQuestion={handleSaveQuestion}
          onCancelQuestion={handleCancelQuestion}
        />
      ))}
    </div>
  );
}

export default QuestionBank;