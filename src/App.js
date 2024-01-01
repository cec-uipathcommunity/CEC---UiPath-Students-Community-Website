import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./screen/Quiz";
import Landing from "./screen/Landing";
import Contact from "./screen/Contact";
import About from "./screen/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/quizquest" element={<Quiz />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
