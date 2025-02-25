import React from 'react';
import './Question.css';

function Question({ question, handleAnswer, onPrevious, onNext, selectedOption }) {
  if (!question) {
    return <div>No question available</div>;
  }

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option) => (
          <li key={option} onClick={() => handleAnswer(option)} className={`option ${selectedOption === option ? 'selected' : ''}`}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        <button className='button1' onClick={onPrevious}>Previous</button>
        <button className='button' onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Question;
// import React from 'react';
// import './Question.css';

// function Question({ question, handleAnswer, onPrevious, onNext, selectedOption }) {
//   if (!question) {
//     return <div>No question available</div>;
//   }

//   return (
//     <div>
//       <h3>{question.question}</h3>
//       <ul>
//         {question.options.map((option) => (
//           <li
//             key={option}
//             onClick={() => handleAnswer(option)}
//             className={`option ${selectedOption === option ? 'selected' : ''}`}
//           >
//             {option}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <button className='button1' onClick={onPrevious}>Previous</button>
//         <button className='button' onClick={onNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Question;
