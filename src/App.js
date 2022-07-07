import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import "./App.css";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
