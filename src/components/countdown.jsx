import React from "react";
import Timer from '../components/Timer'
function Countdown(props) {
  const styles = `
  wrapper {
    background: #00091B;
    color: #fff;
  }
  
  @keyframes fadeIn {
    from {top: 20%; opacity: 0;}
    to {top: 100; opacity: 1;}
    
  }
  
  @-webkit-keyframes fadeIn {
    from {top: 20%; opacity: 0;}
    to {top: 100; opacity: 1;}
    
  }
  
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    animation: fadeIn 1000ms ease;
    -webkit-animation: fadeIn 1000ms ease;
    
  }
  
  h1 {
    font-size: 50px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0;
    line-height: 1;
    font-weight: 700;
  }
  
  .dot {
    color: #4FEBFE;
  }
  
  p {
    text-align: center;
    margin: 18px;
    font-family: 'Muli', sans-serif;
    font-weight: normal;
    
  }
  
 

  `;
  const retur = () => {
    window.location.reload();
  };

  return (
    <>      <style>{styles}</style>
      <div className="wrapper">
  <div className='ttm'><Timer deadline={new Date(2024, 0, 17, 19, 30, 0)} /></div>
  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={retur}>Return to Dashboard</button>
 </div>
    </>
  )
}

export default Countdown
