import React from 'react';
import './Result.css';
import { IoArrowBackOutline } from "react-icons/io5";

function Result({ score, totalQuestions, restartQuiz, handleReview, attendedQuestions }) {
  return (
    <div>
      <a className='buttonclose' href='/'><IoArrowBackOutline /></a>
      <div className='result'>

      <h2>Your Score: {score}/{totalQuestions}</h2>
      <p>Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
      <button className='buttons' onClick={restartQuiz}>Restart Quiz</button>

      {attendedQuestions.length > 0 ? (
        <button className='buttons' onClick={handleReview}>
          View Quiz
        </button>
      ) : (
        <p>No questions attended.</p>
      )}
      </div>
    </div>
  );
}

export default Result;
