import React from 'react';
import Timer from '../components/Timer'
const Contact = () => {

  return (
    <div>
      <h1>Your Countdown</h1>
<Timer deadline={new Date(2024, 0, 3, 23, 30, 0)} />

    </div>
  );
};

export default Contact;
