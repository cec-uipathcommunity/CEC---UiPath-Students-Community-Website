import React from 'react';
import '../styles/dashboard.css';
import QuizTimer from '../components/QuizTimer';
import Slido from '../components/Slido';

function QuizDashboard() {
  return (
    <div className="body-container">
      <div className="headerq">
        <QuizTimer />
      </div>
      <div className="bodyq">
        <Slido />
      </div>
    </div>
  );
}

export default QuizDashboard;
