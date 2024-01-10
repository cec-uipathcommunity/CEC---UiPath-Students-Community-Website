import React, { useState, useEffect } from 'react';
import TimerSec from './TimerSec';

const QuizTimer = () => {
  const [message, setMessage] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentMinute = now.getMinutes();
      if (currentMinute === 30) {
        setMessage('Welcome to Quiz Quest! ');
        setTimeout(() => {
          setShowTimer(true);
        }, 3000); 
      } else if (currentMinute ===35 ) {
        setMessage('1st Question');
      } else if (currentMinute === 36) {
        setMessage('2nd Question');
        
      }else if (currentMinute === 36) {
        setMessage('3nd Question');
        
      }else if (currentMinute === 36) {
        setMessage('4nd Question');
        
      }else if (currentMinute === 36) {
        setMessage('5nd Question');
        
      }else if (currentMinute === 36) {
        setMessage('6nd Question');
        
      }
      else if (currentMinute === 36) {
        setMessage('7nd Question');
        
      }
      else if (currentMinute === 36) {
        setMessage('8nd Question');
        
      }
      else if (currentMinute === 36) {
        setMessage('9nd Question');
        
      }
      else if (currentMinute === 36) {
        setMessage('10nd Question');
        
      } else if (currentMinute === 3) {
        setMessage('Thank you for attending');
        clearInterval(intervalId); 
      }
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div style={{height:"5%",backgroundColor:"#242526",color:"white",borderBottom:"0.5px solid #555"}} className="mt-0 justify-center items-center text-3xl font-medium leading-tight" >
      <div>{message}</div>
      {showTimer && <TimerSec deadline={new Date(2024, 0, 9, 9, 59, 30)} />}
    </div>
  );
};

export default QuizTimer;
