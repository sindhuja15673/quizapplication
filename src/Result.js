import React from 'react';
import './Result.css';

function Result({ score, totalQuestions, restartQuiz }) {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <a className='link' href='/'>Home</a>
      <h2>Your Score: {score}/{totalQuestions}</h2>
      <p>Percentage: {percentage}%</p>
      <button className='buttons' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Result;
