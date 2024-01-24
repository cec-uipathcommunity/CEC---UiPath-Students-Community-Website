import React from 'react'

function quizPanel() {const styles=`
  * {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Avenir', 'Roboto', 'Helvetica', sans-serif;
  background-color: #eee;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1616088410192-d1b123712994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80);
  background-repeat: no-repeat;
}

.container {
  display: block;
  min-height: 100vh;
  width: 100%;
  max-width: 1080px;
  padding: 24px;
  margin: 0 auto;
}

.heading,
.desc {
  text-align: center;
}
#root > div > div > div > div > div > a > h2{
  font-weight:700;
  font-size:150%
}
.heading {
  color: #3E437B;
  font-size: 40px;
  font-weight: 700;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(160deg, #7209b7 25%, #0096c7 100%);
}

.desc {
  color: #707070;
  font-weight: 400;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% + 24px);
  margin-right: -12px;
  margin-left: -12px;
  justify-content: center;
}

.card-wrap {
  display: block;
  width: 100%;
  flex-basis: 100%;
  padding: 12px;
  
  @media (min-width: 577px) {
    width: 50%;
    flex-basis: 50%;
  }
  
  @media (min-width: 841px) {
    width: 33.33333%;
    flex-basis: 33.33333%;
  }
}

.card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  color: #023e8a;
  text-decoration: none;
  transition: box-shadow 120ms ease, background-color 200ms ease;
}

a.card {
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: box-shadow 200ms ease, background-color 200ms ease;
  }
  
  &:active {
    background-color: #f4f5f8;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: box-shadow 200ms ease, background-color 200ms ease;
  }
}

.card-img {
  display: block;
  width: 100%;
  object-position: center;
  object-fit: cover;
  border-radius: 12px;
  min-height: 1px;
  aspect-ratio: 3/2;
}



  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 999px;
    object-position: center 25%;
  }
  
  &:not(:first-of-type) {
    margin-left: -12px;
  }
  
  &.active {
    z-index: 12;
  }
}


.speaker-role {
  margin-top: 4px;
  font-size: 14px;
  opacity: 0.75;
}

  `
  return ( <>
    <style>{styles}</style>
    <div className="wrapper">
  <div className="container">
    <h1 className="heading">Quiz Quest</h1>
    <div className="list">
      <div className="card-wrap">
        <a href="/events/quizquest/leaderboard1" className="card">
          <img src="https://prime-event.com.ua/wp-content/webp-express/webp-images/uploads/2020/08/Kviz.jpg.webp" alt="img" className="card-img"/>
          <h2 className="card-title">Week 01</h2>
          <div className="speaker-role">
             <p><b>Participants: 33 </b></p>
              <p><b>03/01/2024</b></p>
            </div>
          <div className="card-title">
            <div className="card-title">
              <p><a href="/events/quizquest/leaderboard1">View Leaderboard</a></p>
            </div>
          </div>
        </a>
      </div>
      <div className="card-wrap">
        <a href="/events/quizquest/leaderboard2" className="card">
          <img src="https://prime-event.com.ua/wp-content/webp-express/webp-images/uploads/2020/08/Kviz.jpg.webp" alt="img" className="card-img"/>
          <h2 className="card-title">Week 02</h2>
          <div className="speaker-role">
             <p><b>Participants: 79 </b></p>
              <p><b>10/01/2024</b></p>
            </div>
          <div className="card-title">
            <div className="card-title">
              <p><a href="/events/quizquest/leaderboard2">View Leaderboard</a></p>
            </div>
          </div>
        </a>
      </div>
      <div className="card-wrap">
        <a href="/events/quizquest/leaderboard3" className="card">
          <img src="https://prime-event.com.ua/wp-content/webp-express/webp-images/uploads/2020/08/Kviz.jpg.webp" alt="img" className="card-img"/>
          <h2 className="card-title">Week 03</h2>
          <div className="speaker-role">
             <p><b>Participants: 51 </b></p>
              <p><b>23/01/2024</b></p>
            </div>
          <div className="card-title">
            <div className="card-title">
              <p><a href="/events/quizquest/leaderboard3">View Leaderboard</a></p>
            </div>
          </div>
        </a>
      </div>
      <div className="card-wrap">
        <a href="/events/quizquest/leaderboard4" className="card">
          <img src="https://prime-event.com.ua/wp-content/webp-express/webp-images/uploads/2020/08/Kviz.jpg.webp" alt="img" className="card-img"/>
          <h2 className="card-title">Week 04</h2>
          <div className="speaker-role">
             <p><b>Participants: 56 </b></p>
              <p><b>24/01/2024</b></p>
            </div>
          <div className="card-title">
            <div className="card-title">
              <p><a href="/events/quizquest/leaderboard4">View Leaderboard</a></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
    
  )
}

export default quizPanel