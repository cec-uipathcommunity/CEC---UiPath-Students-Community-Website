import React, { useState, useEffect } from 'react';
import TimerSec from './TimerSec';

const QuizTimer = () => {
  const [message, setMessage] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentMinute = now.getMinutes();

      if (currentMinute === 58) {
        setMessage('Welcome to Quiz Quest! Quiz will start in:');
        setTimeout(() => {
          setShowTimer(true);
        }, 3000); // Wait for 3 seconds before showing the timer
      } else if (currentMinute === 47) {
        setMessage('1st Question');
      } else if (currentMinute === 48) {
        setMessage('2nd Question');
      } else if (currentMinute === 49) {
        setMessage('Thank you for attending');
        clearInterval(intervalId); // Stop the interval after the last message
      }
    }, 1000); // Check time every second

    return () => clearInterval(intervalId); // Ensure interval is cleared on unmount
  }, []);

  return (
    <div>
      <div>{message}</div>
      {showTimer && <TimerSec deadline={new Date(2024, 0, 9, 9, 59, 30)} />}
    </div>
  );
};

export default QuizTimer;
