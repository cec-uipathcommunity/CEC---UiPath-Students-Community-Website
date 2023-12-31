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
          <Route exact path="/janquiz" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-3l font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
