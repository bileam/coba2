import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Utama from "./components/Utama.jsx";
import HomePage from "./Modals/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/coba2" element={<Utama />} />
      </Routes>
    </Router>
  );
};

export default App;
