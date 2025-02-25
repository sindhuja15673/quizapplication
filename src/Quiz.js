import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import './Quiz.css';

function Quiz() {
  const [quizCategory, setQuizCategory] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quizCategory) {
      setLoading(true);
      fetch(`http://localhost:5000/quiz/${quizCategory}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          setQuizData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching quiz data:', error);
          setLoading(false);
        });
    }
  }, [quizCategory]);

  const handleStartQuiz = (category) => {
    setQuizCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleNext = () => {
    if (selectedOption !== null && quizData.length > 0) {
      const currentQuestion = quizData[currentQuestionIndex];
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < quizData.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResult(true);
        submitScore();
      }
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setSelectedOption(null);
  };

  const submitScore = () => {
    const username = prompt('Enter your username:');
    fetch('http://localhost:5000/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        category: quizCategory,
        score,
      }),
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error submitting score:', error));
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className='quiz-container'>
      {!quizCategory && (
        <>
          <h1 className='title'>Choose a Quiz Category</h1>
          {['JavaScript', 'HTML', 'CSS'].map((category) => (
            <button key={category} className='start-button' onClick={() => handleStartQuiz(category)}>
              {category}
            </button>
          ))}
        </>
      )}
      {quizCategory && (
        <>
          {loading && <div className="loading">Loading...</div>}
          {showResult ? (
            <Result score={score} totalQuestions={quizData.length} restartQuiz={restartQuiz} />
          ) : (
            currentQuestion ? (
              <Question
                question={currentQuestion}
                handleAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                selectedOption={selectedOption}
              />
            ) : (
              <div>No questions available</div>
            )
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
