import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js"
import Store from "./components/Store.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


