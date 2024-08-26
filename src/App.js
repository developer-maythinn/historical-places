// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlacesList from "./components/PlacesList";
import PlaceDetails from "./components/PlaceDetails";
import "./index.css";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Historical Places</h1>
        <Routes>
          <Route path="/" element={<PlacesList />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
