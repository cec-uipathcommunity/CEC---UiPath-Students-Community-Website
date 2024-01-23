import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screen/Landing";
import Contact from "./screen/Contact";
import Events from "./screen/Events";
import Error from "./screen/Error";
import Login from "./screen/Login";
import ProtectedRoute from "./ProtectedRoute"; 
import ComingSoon from "./screen/ComingSoon";
import QuizDashboard from "./screen/QuizDashboard";
import Leaderboard1 from "./screen/leaderboard/leaderboard1";
import Leaderboard2 from "./screen/leaderboard/leaderboard2";
// import ChatBot from "./components/ChatBot";
import OurTeam from "./screen/OurTeam"
// import Form from "../src/components/form";
import QuizPanel from "../src/components/quizPanel"
import CommunityForum from "../src/screen/CommunityForum"
import Quiz from "../src/screen/Quiz1"

// import AdminDashboard from "./screen/AdminDashboard";

function App() {
  
  return (
    <div className="App">
      {/* <ChatBot/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          {/* <Route exact path="/joincommunity" element={<Form />}></Route> */}
          <Route exact path="/events/quizquest/praticequiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>}></Route>
          <Route exact path="/events/quizquest/leaderboard" element={<QuizPanel/>}></Route>
          <Route exact path="/quizquest/leaderboard" element={<QuizPanel/>}></Route>
          <Route exact path="/forum" element={<CommunityForum />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/events/quizquest.week3" element={<ProtectedRoute><Quiz /></ProtectedRoute>}></Route>
          <Route exact path="/ourteam" element={<OurTeam />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/comingsoon" element={<ComingSoon />}></Route>
          {/* <Route path="/admin/adddetails" element={<AdminDashboard />} /> */}
          <Route exact path="/events/quizquest/leaderboard1" element={<Leaderboard1/>}></Route>
          <Route exact path="/events/quizquest/leaderboard2" element={<Leaderboard2/>}></Route>
          <Route path="/events/quizquest/quizdashboard" element={<ProtectedRoute><QuizDashboard /></ProtectedRoute>} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;