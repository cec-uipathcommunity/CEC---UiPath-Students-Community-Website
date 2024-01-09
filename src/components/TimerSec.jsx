import React, { useState, useEffect, useCallback } from 'react';
import '../styles/countdown.css';

const QuizTimer = () => {
  const [message, setMessage] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [values, setValues] = useState({ seconds: 0 });

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const deadline = new Date(2024, 0, 9, 10, 3, 0);
    const difference = deadline - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentMinute = now.getMinutes();

      if (currentMinute === 2) {
        setMessage('Welcome to Quiz Quest! Quiz will start in:');
        setShowTimer(true);
      } else if (currentMinute === 3) {
        setMessage('1st Question');
      } else if (currentMinute === 58) {
        setMessage('2nd Question');
      } else if (currentMinute === 59) {
        setMessage('Thank you for attending');
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <div>
      <div>{message}</div>
      {showTimer && (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content custom-style">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': values.seconds }}>{values.seconds}</span>
            </span>
            sec
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizTimer;
