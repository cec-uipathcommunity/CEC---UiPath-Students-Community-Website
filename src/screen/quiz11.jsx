import React, { useState, useEffect } from 'react';

const Quizzz = () => {
  const [quizState, setQuizState] = useState('start'); // 'start', 'quiz', 'result'
  const [questions, setQuestions] = useState([
    {
      "question": "What does RPA stand for?",
      "options": ["Robotic Processing Automation", "Robotic Process Automation", "Real-time Process Automation", "Repetitive Process Automation"],
      "correct_answer": "Robotic Process Automation"
    },
    {
      "question": "How does RPA differ from traditional automation?",
      "options": ["It is slower", "It requires human intervention", "It mimics human actions on the user interface", "It only works with physical robots"],
      "correct_answer": "It mimics human actions on the user interface"
    },
    {
      "question": "Can you explain the concept of 'bots' in the context of RPA?",
      "options": ["Bits of Technology", "Binary Objects", "Botanical Systems", "Software robots"],
      "correct_answer": "Software robots"
    },
    {
      "question": "What types of tasks are suitable for automation with RPA?",
      "options": ["Highly creative tasks", "Tasks requiring human intuition", "Repetitive rule-based tasks", "Only physical tasks"],
      "correct_answer": "Repetitive rule-based tasks"
    },
    {
      "question": "What are the key benefits of implementing RPA in a business process?",
      "options": ["Increased complexity", "Higher operational costs", "Improved efficiency and accuracy", "Limited scalability"],
      "correct_answer": "Improved efficiency and accuracy"
    },
    {
      "question": "Name a few popular RPA tools in the market.",
      "options": ["Blue Prism", "Yellow Prism", "Green Prism", "Red Prism"],
      "correct_answer": "Blue Prism"
    },
    {
      "question": "How does RPA contribute to improving operational efficiency?",
      "options": ["By introducing manual errors", "By slowing down processes", "By automating repetitive tasks", "By increasing paperwork"],
      "correct_answer": "By automating repetitive tasks"
    },
    {
      "question": "Explain the difference between attended and unattended RPA.",
      "options": ["Attended RPA requires human intervention, unattended RPA works autonomously", "There is no difference", "Both require constant human supervision", "Unattended RPA requires human intervention, attended RPA works autonomously"],
      "correct_answer": "Attended RPA requires human intervention, unattended RPA works autonomously"
    },
    {
      "question": "What role does AI (Artificial Intelligence) play in RPA?",
      "options": ["No role at all", "AI is the same as RPA", "AI enhances decision-making in RPA processes", "RPA and AI are mutually exclusive"],
      "correct_answer": "AI enhances decision-making in RPA processes"
    },
    {
      "question": "What are the potential challenges or considerations when implementing RPA in an organization?",
      "options": ["Increased efficiency", "High upfront costs", "Reduced accuracy", "No impact on existing processes"],
      "correct_answer": "High upfront costs"
    }
  ]);
  const styles = `
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f0f0f0;
    }

    .app {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .quiz-container {
      width: 100%;
      max-width: 600px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
      margin: 20px;
    }

    .btn {
      width: 100%;
      padding: 15px;
      background-color: #4caf50;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }

    .header {
      background-color: #4caf50;
      padding: 15px;
      color: #fff;
      text-align: center;
      font-size: 20px;
    }

    .timer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 15px 15px;
    }

    .timer-text {
      font-size: 18px;
      font-weight: bold;
    }

    .timer-sec {
      font-size: 18px;
      font-weight: bold;
    }

    .time-line {
      height: 5px;
      background-color: #4caf50;
      margin-top: 10px;
      width: 100%;
    }

    .question-container {
      padding: 20px;
    }

    .question-text {
      font-size: 18px;
      font-weight: bold;
    }

    .option-list {
      margin-top: 20px;
    }

    .option {
      padding: 10px;
      background-color: #f4f4f4;
      margin: 10px 0;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s ease-in-out;
    }

    .option:hover {
      background-color: #e0e0e0;
    }

    .selected {
      background-color: #4caf50;
      color: #fff;
    }

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
    }

    .footer-btn {
      width: 48%;
      padding: 15px;
      background-color: #4caf50;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }

    .footer-btn:hover {
      background-color: #45a049;
    }
  `;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const disableCopyAndScreenshot = () => {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Disable right-click context menu
    });

    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey || event.metaKey) {
        // Disable copying with Ctrl+C (Windows/Linux) or Command+C (Mac)
        event.preventDefault();
      }

      if (event.key === 'PrintScreen' || event.key === 'F12') {
        // Disable Print Screen and F12 key
        event.preventDefault();
      }
    });
  };

  useEffect(() => {
    disableCopyAndScreenshot();
  }, []);

  const startQuiz = () => {
    setQuizState('quiz');
    startTimer();
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          handleTimeUp();
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleTimeUp = () => {
    handleAnswerSubmission();
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    resetTimer();
    setSelectedAnswer(null);
  };

  const handleOptionClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };

  const checkAnswer = () => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      setUserScore((prevScore) => prevScore + 1);
      setCorrectAnswers((prev) => [...prev, currentQuestion]);
    } else {
      setIncorrectAnswers((prev) => [...prev, currentQuestion]);
    }

    handleAnswerSubmission();
  };

  const handleAnswerSubmission = () => {
    if (currentQuestion === questions.length - 1) {
      // Last question, show result
      setQuizState('result');
    } else {
      nextQuestion();
    }
  };

  const resetTimer = () => {
    setTimeLeft(15);
  };

  const restartQuiz = () => {
    setQuizState('start');
    setCurrentQuestion(0);
    setUserScore(0);
    setTimeLeft(15);
    setCorrectAnswers([]);
    setIncorrectAnswers([]);
    setSelectedAnswer(null);
  };

  const skipQuestion = () => {
    handleAnswerSubmission();
  };

  useEffect(() => {
    // Fetch questions or set them from a file or API
    // setQuestions(/* Your array of questions */);
  }, []);

  useEffect(() => {
    // Handle real-time question change logic here
    const realTimeQuestionChangeTimer = setInterval(() => {
      nextQuestion();
    }, 30000); // Change question every 30 seconds (adjust as needed)

    return () => clearInterval(realTimeQuestionChangeTimer);
  }, [currentQuestion]);

  return (
    <>
      <style>{styles}</style>
      <div className={`app ${quizState === 'quiz' ? 'dark-theme' : ''}`}>
        {quizState === 'start' && (
          <div className="quiz-container">
            <button className="btn" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        )}

        {quizState === 'quiz' && (
          <div className="quiz-container">
            <div className="header">Pratice Questions For Quiz Quest </div>
            <div className="timer-container">
              <div className="timer-text">Time Left</div>
              <div className="timer-sec">{timeLeft}s</div>
            </div>
            <div className="time-line" />
            <div className="question-container">
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
              <div className="option-list">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`option ${
                      selectedAnswer === option ? 'selected' : ''
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className="footer-container">
                <button
                  className="footer-btn"
                  onClick={skipQuestion}
                >
                  Skip Question
                </button>
                <button
                  className="footer-btn"
                  onClick={checkAnswer}
                  disabled={selectedAnswer === null}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {quizState === 'result' && (
          <div className="quiz-container">
            <div className="header">Quiz Result</div>
            <div className="question-container">
              <div className="question-text">You've completed the quiz!</div>
              <div className="question-text">
                Your score: {userScore} out of {questions.length}
              </div>
              <div className="question-text">Correct Answers:</div>
              <ul>
                {correctAnswers.map((index) => (
                  <li key={index}>{questions[index].question}</li>
                ))}
              </ul>
              <div className="question-text">Incorrect Answers:</div>
              <ul>
                {incorrectAnswers.map((index) => (
                  <li key={index}>{questions[index].question}</li>
                ))}
              </ul>
            </div>
            <button className="footer-btn" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quizzz;

