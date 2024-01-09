import React from 'react';
import '../styles/leaderboard.css'; 


function Leaderboard() {
  return (
    <main className="leaderboard-root">
      <header id="header">
        <h1>Leaderboard</h1>
        <h3>Quiz Quest - Week 01</h3>
      </header>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tr>
            <td className="number">1</td>
            <td className="name">Shreesha</td>
            <td className="points">
            4/5 - 0:35
              <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
            </td>
          </tr>
          <tr>
            <td className="number">2</td>
            <td className="name">Achala P R</td>
            <td className="points">4/5 - 0:35</td>
          </tr>
          <tr>
            <td className="number">3</td>
            <td className="name">Srushti Rajendra Naik</td>
            <td className="points">4/5 - 0:39</td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td className="name">Praharsh T</td>
            <td className="points">4/5 - 0:43</td>
          </tr>
          <tr>
            <td className="number">5</td>
            <td className="name">Rinisha S Prabhu</td>
            <td className="points">4/5 - 0:44</td>
          </tr>
        </table>
        {/* <div id="buttons">
          <button className="exit">Exit</button>
          <button className="continue">Continue</button>
        </div> */}
      </div>
    </main>
  );
}

export default Leaderboard;
