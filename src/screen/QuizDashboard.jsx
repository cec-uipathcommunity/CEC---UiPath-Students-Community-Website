import React from 'react';
import '../styles/dashboard.css';
import Timer from '../components/Timer';
import Slido from '../components/Slido';

function QuizDashboard() {
  return (
    <div className="body-container">
      <div className="headerq">
        <Timer deadline={new Date(2024, 0, 10, 19, 30, 0)} />
      </div>
      <div className="bodyq">
        <Slido />
      </div>
    </div>
  );
}

export default QuizDashboard;
