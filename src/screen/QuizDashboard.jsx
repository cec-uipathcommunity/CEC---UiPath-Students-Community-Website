import React from 'react'

function QuizDashboard() {
  const styles=`
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
  
  return (
    <>
    <style>{styles}</style>
    <div class="wrapper">
  <div class="container">
    <h1 class="heading">Quiz Quest</h1>
    <div class="list">
      <div class="card-wrap">
        <a href="/events/quizquest/leaderboard1" class="card">
          <img src="https://prime-event.com.ua/wp-content/webp-express/webp-images/uploads/2020/08/Kviz.jpg.webp" alt="img" class="card-img"/>
          <h2 class="card-title">Week 01</h2>
          <div className="speaker-role">
             <p><b>Participants: 33 </b></p>
              <p><b>03/01/2024</b></p>
            </div>
          <div class="card-title">
            <div className="card-title">
              <p><a href="/events/quizquest/leaderboard1">View Leaderboard</a></p>
            </div>
          </div>
        </a>
      </div>
      <div class="card-wrap">
        <a href="/events/quizquest/leaderboard2" class="card">
          <img src="https://prime-event.com.ua/wp-content/webp-express/webp-images/uploads/2020/08/Kviz.jpg.webp" alt="img" class="card-img"/>
          <h2 class="card-title">Week 02</h2>
          <div className="speaker-role">
             <p><b>Participants: 61 </b></p>
              <p><b>10/01/2024</b></p>
            </div>
          <div class="card-title">
            <div className="card-title">
              <p><a href="/events/quizquest/leaderboard2">View Leaderboard</a></p>
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

export default QuizDashboard


// import React from 'react';

// const QuizDashboard = () => {
//   const styles = {
//     dropdownContent: {
//       top: '65px',
//     },
//     sidenav: {
//       paddingTop: '18px',
//       minHeight: '500px',
//       overflowY: 'auto',
//       // ... other styles
//     },
//     // ... rest of the styles converted to inline format
//   };

//   return (
//     <>
//       <style>
        
//         {`
//           /* Paste the rest of the CSS styles here */
//         `}
//       </style>
//       <body>
//   <header>
//     <div className="navbar-fixed">
//       <nav className="grey darken-1">
//         <div className="container">
//           <div className="nav-wrapper">
//             <a href="#!" className="brand-logo">Quiz Quest</a>
            
//           </div>
//         </div>
//       </nav>
//     </div>

//     <ul id="nav-mobile" className="sidenav sidenav-fixed">
//       <li className="bold">
//         <a href="#" className="waves-effect waves-teal">Dashboard</a>
//       </li>
//       <li className="bold">
//         <a href="#" className="waves-effect waves-teal">My Events</a>
//       </li>
//       <li className="bold">
//         <a href="#" className="waves-effect waves-teal">Joined Events</a>
//       </li>
//       <li className="bold">
//         <a href="#" className="waves-effect waves-teal">My Schedule</a>
//       </li>
//       <li className="bold">
//         <a className="waves-effect waves-teal modal-trigger" href="#calendar">Calendar</a>
//       </li>
//       <li className="bold">
//         <a className="waves-effect waves-teal modal-trigger" href="#event-today">Events Today</a>
//       </li>
//       <div className="logo"><h3>Logo</h3></div>
//     </ul>

//   </header>



//   <main>
//     <div className="container">
//       <div className="row">

//         <div className="col s12 l7 dashboard">
//           <div className="card grey lighten-3">
//             <div className="card-content posts">

//               <nav className="red darken-1">
//                 <div className="nav-wrapper">
//                   <h4 className="left event-title">EVENTS</h4>
                  
//                 </div>
//               </nav>

//               <div className="card medium event-card">
//                 <div className="card-image">
//                   <img src="https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?cs=srgb&dl=agriculture-bird-s-eye-view-colors-1081912.jpg&fm=jpg" alt="banner"/>
//                 </div>
//                 <div className="card-content">
//                   <div className="card-title"><b>Week 02</b></div>
//                   <div className="left">
//                     <p><b>Participants: 61 </b></p>
//                     <p><b>10/01/2024</b></p>
//                   </div>
//                   <div className="right-align">
//                     <p><a href="#">View Leaderboard</a></p>
//                   </div>
//                 </div>
//               </div>
//               <div className="card medium event-card">
//                 <div className="card-image">
//                   <img src="https://images.pexels.com/photos/1853371/pexels-photo-1853371.jpeg?cs=srgb&dl=adventure-cliff-daylight-1853371.jpg&fm=jpg" alt="banner"/>
//                 </div>
//                 <div className="card-content">
//                  <div className="card-title"><b>Week 01</b></div>
//                   <div className="left">
//                     <p><b>Participants: 33 </b></p>
//                     <p><b>03/01/2024</b></p>
//                   </div>
//                   <div className="right-align">
//                     <p><a href="#">View Leaderboard</a></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </div>
//   </main>
// </body>
//     </>
//   );
// };

// export default QuizDashboard;
