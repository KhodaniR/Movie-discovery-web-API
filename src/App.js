import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Movie_attributes/HomePage';
import MovieDetails from "./Movie_attributes/MovieDetails";
import MovieSearch from "./Movie_attributes/MovieSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<MovieSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
