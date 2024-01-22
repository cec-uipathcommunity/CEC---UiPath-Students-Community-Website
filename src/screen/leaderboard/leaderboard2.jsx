import React from 'react';
const Leaderboard2 = () => {
  const styles = `
  * {
  font-size: 62, 5%;
  box-sizing: border-box;
  margin: 0;
}

body {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #fbfaff;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.leaderboard-root{
  height:auto;
}

main {
  width: 40rem;
  height: 43rem;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #e4e7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
}
h3{
  font-family: "Rubik", sans-serif;
  font-weight:900;
  font-size: 0.9rem;
  color: #141a39;
  text-transform: uppercase;
  cursor: default;
}

#header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 2rem;
}

.share {
  width: 4.5rem;
  height: 3rem;
  background-color: #f55e77;
  border: 0;
  border-bottom: 0.2rem solid #c0506a;
  border-radius: 2rem;
  cursor: pointer;
}

.share:active {
  border-bottom: 0;
}

.share i {
  color: #fff;
  font-size: 2rem;
}

h1 {
  font-family: "Rubik", sans-serif;
  font-weight:900;
  font-size: 1.7rem;
  color: #141a39;
  text-transform: uppercase;
  cursor: default;
}

#leaderboard {
  width: 100%;
  position: relative;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  color: #141a39;
  cursor: default;
}

tr {
  transition: all 0.2s ease-in-out;
  border-radius: 0.2rem;
}

tr:not(:first-child):hover {
  background-color: #fff;
  transform: scale(1.1);
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #e4e7fb;
}

tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tr:nth-child(1) {
  color: #fff;
}

td {
  height: 5rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  position: relative;
}

.number {
  width: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: left;
}

.name {
  text-align: left;
  font-size: 1.2rem;
}

.points {
  font-weight: bold;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.points:first-child {
  width: 10rem;
}

.gold-medal {
  height: 3rem;
  margin-left: 1.5rem;
}

.ribbon {
  width: 42rem;
  height: 5.5rem;
  top: -0.5rem;
  background-color: #5c5be5;
  position: absolute;
  left: -1rem;
  -webkit-box-shadow: 0px 15px 11px -6px #7a7a7d;
  box-shadow: 0px 15px 11px -6px #7a7a7d;
}

.ribbon::before {
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  bottom: -0.8rem;
  left: 0.35rem;
  transform: rotate(45deg);
  background-color: #5c5be5;
  position: absolute;
  z-index: -1;
}

.ribbon::after {
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  bottom: -0.8rem;
  right: 0.35rem;
  transform: rotate(45deg);
  background-color: #5c5be5;
  position: absolute;
  z-index: -1;
}

#buttons {
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.exit {
  width: 11rem;
  height: 3rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: #FDFEFE;
  border: 0;
  background-color: #DC143C;
  border-radius: 2rem;
  cursor: pointer;
}

.exit:hover {
  border: 0.1rem solid #5c5be5;
}

.continue {
  width: 11rem;
  height: 3rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.3rem;
  color: #fff;
  text-transform: uppercase;
  background-color: #5c5be5;
  border: 0;
  border-bottom: 0.2rem solid #3838b8;
  border-radius: 2rem;
  cursor: pointer;
}

.continue:active {
  border-bottom: 0;
}

@media (max-width: 740px) {
    * {
      font-size: 70%;
    }
}

@media (max-width: 500px) {
    * {
      font-size: 55%;
    }
}

@media (max-width: 390px) {
    * {
      font-size: 45%;
    }
} 

  `;


  const goToHomePage = () => {
    window.location.href = '/events/quizquest/quizdashboard';
  };
  const goprev = () => {
    window.location.href = '/events/quizquest/leaderboard1'; 
  };
  return (
    <div>
      <style>{styles}</style>
      <main className="leaderboard-root">
      <header id="header">
        <h1>Leaderboard</h1>
        <h3>Quiz Quest - Week 02</h3>
      </header>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tr>
            <td className="number">1</td>
            <td className="name">Srushti Rajendra Naik</td>
            <td className="points">
            9/10 - 1:40
              <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
            </td>
          </tr>
          <tr>
            <td className="number">2</td>
            <td className="name">Bhoomika Chandrakanth Kamat</td>
            <td className="points">7/10 - 1:32</td>
          </tr>
          <tr>
            <td className="number">3</td>
            <td className="name">Praharsh T</td>
            <td className="points">7/10 - 1:40</td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td className="name">Rakshitha B Bhajentri</td>
            <td className="points">7/10 - 1:42</td>
          </tr>
          <tr>
            <td className="number">5</td>
            <td className="name">P Shreekar Shenoy</td>
            <td className="points">7/10 - 1:52</td>
          </tr>
        </table>
         <div id="buttons">
          <button onClick={goToHomePage} className="exit">Exit</button>
<button onClick={goprev} className="continue">Week 01</button> 

        </div> 
      </div>
    </main>
    </div>
  );
};

export default Leaderboard2;
