import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import "./App.css";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
