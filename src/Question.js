import React from 'react';
import './Question.css';
import { IoCloseSharp } from "react-icons/io5";

function Question({ question, handleAnswer, onNext, onPrevious, selectedOption, reviewMode, isLastQuestion, handleStartQuiz, currentIndex }) {
  return (
    <div>
     {handleStartQuiz && currentIndex === 0 && !reviewMode &&(
        <a  href='/' >
         <button className='buttonc'><IoCloseSharp /></button> 
        </a>
      )}
      
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => {
          let optionClass = '';

          if (reviewMode) {
            if (option === question.correctAnswer) {
              optionClass = 'correct'; 
            } else if (option === selectedOption) {
              optionClass = 'incorrect';
            }
          }

          return (
            <li
              key={index}
              className={`option-button option ${selectedOption === option ? "selected" : ""} ${optionClass} ${reviewMode ? "disabled" : ""}`}
              onClick={() => !reviewMode && handleAnswer(option)}
              disabled={reviewMode} 
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div>
        <button className='button1' onClick={onPrevious} disabled={reviewMode && selectedOption === null}>
          Previous
        </button>
        <button className='button' onClick={ onNext}>
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Question;
