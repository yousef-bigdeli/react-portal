import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import "./App.css";
import ProductPage from "./Pages/ProductPage";
import LoginPortal from "./components/LoginPortal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPortal />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
