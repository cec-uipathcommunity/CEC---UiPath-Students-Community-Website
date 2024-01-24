import React, { useState, useEffect } from "react";
import Timer from '../components/Timer';
import { Link } from "react-router-dom";

function Countdown(props) {
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  useEffect(() => {
    const deadline = new Date(2024, 0, 31, 19, 25, 0); 
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setIsTimerCompleted(currentTime >= deadline);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const styles = `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
    }

    .wrapper {
      background: #00091B;
      color: #fff;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    h1 {
      font-size: 50px;
      margin-bottom: 10px;
      line-height: 1;
      font-weight: 700;
    }

    .dot {
      color: #4FEBFE;
    }

    p {
      margin-bottom: 18px;
      font-weight: normal;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .return-btn {
      background-color: #3498db;
      color: #fff;
      font-size: 16px;
      padding: 10px 20px;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .join-btn {
      background-color: #2ecc71;
      color: #fff;
      font-size: 16px;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  const retur = () => {
    window.location.reload();
  };


  return (
    <>
      <style>{styles}</style>
      <div className="wrapper">

        <div className='ttm'><Timer deadline={new Date(2024, 0, 31, 19, 30, 0)} /></div>
        <div className="buttons">
          <button
            className="return-btn"
            onClick={retur}
          >
            Return to Dashboard
          </button>
          {isTimerCompleted && (
            <Link to="/events/quizquest/.week4" className="join-btn">
            Join
          </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Countdown;
