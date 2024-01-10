import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screen/Landing";
import Contact from "./screen/Contact";
import Events from "./screen/Events";
import About from "./screen/About";
import Error from "./screen/Error";
import Login from "./screen/Login";
import ProtectedRoute from "./ProtectedRoute"; 
import ComingSoon from "./screen/ComingSoon";
import QuizDashboard from "./screen/QuizDashboard";
import Leaderboard1 from "./screen/leaderboard/leaderboard1";
import Leaderboard2 from "./screen/leaderboard/leaderboard2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/comingsoon" element={<ComingSoon />}></Route>
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