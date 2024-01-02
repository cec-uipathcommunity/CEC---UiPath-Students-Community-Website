import React from "react";
import SlidoEvent from '../components/Slido';
import { TypeAnimation } from 'react-type-animation';
function Quiz() {
  return <div>Quiz
   
<TypeAnimation
    sequence={[
        'CEC-UiPath Student Community',
        1000
    ]}
    wrapper="span"
    typeSpeed={30}
    backSpeed={50}
    repeat={Infinity}
/>
<SlidoEvent />
  </div>;
}

export default Quiz;
