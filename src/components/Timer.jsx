import React, { useState, useEffect, useCallback } from 'react';
import '../styles/countdown.css';

const Timer = ({ deadline }) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = deadline - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [deadline]);

  const [values, setValues] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content custom-style">
    <span className="countdown font-mono text-5xl">
      <span style={{ '--value': values.days }}>{values.days}</span>
    </span>
    days
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content custom-style">
    <span className="countdown font-mono text-5xl">
      <span style={{ '--value': values.hours }}>{values.hours}</span>
    </span>
    hours
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content custom-style">
    <span className="countdown font-mono text-5xl">
      <span style={{ '--value': values.minutes }}>{values.minutes}</span>
    </span>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content custom-style">
    <span className="countdown font-mono text-5xl">
      <span style={{ '--value': values.seconds }}>{values.seconds}</span>
    </span>
    sec
  </div>
</div>

  );
};

export default Timer;
