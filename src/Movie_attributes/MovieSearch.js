import React, { useState } from "react";
import { fetchTopMovies as searchMovies } from "../Api";
import MovieCard from "./MovieCard";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchMovies(query);
      setSearchResults(data.results);
    } catch (error) {
      // Handle errors here
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
