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
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [attendedQuestions, setAttendedQuestions] = useState([]);
  const [quizRestarted, setQuizRestarted] = useState(false);

  useEffect(() => {
    if (quizCategory) {
      fetch(`http://localhost:5000/quiz/${quizCategory}`)
        .then(response => response.json())
        .then(data => {
          setQuizData(data);
          setSelectedAnswers(Array(data.length).fill(null));
          setAttendedQuestions([]);
        })
        .catch(error => console.error('Error fetching quiz data:', error));
    }
  }, [quizCategory]);

  const handleStartQuiz = (category) => {
    setQuizCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setReviewMode(false);
    setSelectedAnswers([]);
    setAttendedQuestions([]);
  };

  const handleAnswer = (option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newAnswers);

    if (!attendedQuestions.includes(currentQuestionIndex)) {
      setAttendedQuestions([...attendedQuestions, currentQuestionIndex]);
    }
  };
  

  const handleNext = () => {
    if (reviewMode) {
      const currentIndex = attendedQuestions.indexOf(currentQuestionIndex);
      if (currentIndex + 1 < attendedQuestions.length) {
        setCurrentQuestionIndex(attendedQuestions[currentIndex + 1]);
      } else {
        setShowResult(true);
      }
    } else {
      if (selectedAnswers[currentQuestionIndex] !== null) {
        const currentQuestion = quizData[currentQuestionIndex];
  
        let newScore = score;
        if (selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer) {
          newScore += 1;
          setScore(newScore); 
        }
  
        if (currentQuestionIndex + 1 < quizData.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          if (!showResult) {  
            setShowResult(true);
            submitScore(newScore);  
          }
        }
      }
    }
  };
  
  const handlePrevious = () => {
    if (reviewMode) {
      const currentIndex = attendedQuestions.indexOf(currentQuestionIndex);
      if (currentIndex > 0) {
        setCurrentQuestionIndex(attendedQuestions[currentIndex - 1]);
      }
    } else {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    }
  };

  const submitScore = (finalscore) => {
        const username = prompt('Enter your username:');
        fetch('http://localhost:5000/score', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            category: quizCategory,
            score: finalscore,
          }),
        })
          .then(response => response.text())
          .then(data => console.log(data))
          .catch(error => console.error('Error submitting score:', error));
      };

      
      
  const restartQuiz = () => {
    const confirmRestart = window.confirm("Are you sure you want to restart the quiz?");
  if (confirmRestart) {
    setQuizRestarted(true); 
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setReviewMode(false);
    setSelectedAnswers(Array(quizData.length).fill(null));
    setAttendedQuestions([]);
  }
  };
  

  const handleReview = () => {
    if (attendedQuestions.length > 0) {
      setReviewMode(true);
      setShowResult(false); // Go back to questions page
      setCurrentQuestionIndex(attendedQuestions[0]); // Start from first attended question
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    
    <div className='quiz-container'>
      {!quizCategory && (
        <>
          <h1 className='title'>Choose a Quiz Category</h1>
          {['JavaScript', 'HTML', 'CSS', 'React ', 'Redux'].map((category) => (
            <button key={category} className='start-button' onClick={() => handleStartQuiz(category)}>
              {category}
            </button>
          ))}
        </>
      )}

      {quizCategory && (
        <>
        {/* {loading && <div className="loading">Loading...</div>} */}
          {showResult ? (
            <Result 
              score={score} 
              totalQuestions={quizData.length} 
              restartQuiz={restartQuiz} 
              handleReview={handleReview} 
              attendedQuestions={attendedQuestions}
            />
          ) : (
             
            currentQuestion ? (
              <Question
                question={currentQuestion}
                handleAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                selectedOption={selectedAnswers[currentQuestionIndex]}
                reviewMode={reviewMode}
                isLastQuestion={currentQuestionIndex === quizData.length - 1} 
                setShowResult={setShowResult}
                quizRestarted={quizRestarted}
                currentIndex = {currentQuestionIndex}
                handleStartQuiz = {handleStartQuiz}
                quizCategory={quizCategory}
              />
            ):(
              <div>No questions available</div>
            )
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
