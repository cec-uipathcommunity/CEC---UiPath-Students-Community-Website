import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./screen/Quiz";
import Landing from "./screen/Landing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/quizquest" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
