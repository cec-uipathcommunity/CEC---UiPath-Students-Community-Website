import React, { useState, useEffect } from 'react';

const QuizTimer = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentMinute = now.getMinutes();

      if (currentMinute === 56) {
        setMessage('Welcome to Quiz Quest!');
      } else if (currentMinute === 57) {
        setMessage('1st Question');
      } else if (currentMinute === 58) {
        setMessage('2nd Question');
      }else if (currentMinute === 59) {
            setMessage('Thank Your for attending');
        clearInterval(intervalId); // Stop the interval after the last message
      }
    }, 1000); // Check time every second

    return () => clearInterval(intervalId); // Ensure interval is cleared on unmount
  }, []);

  return <div>{message}</div>;
};

export default QuizTimer;
