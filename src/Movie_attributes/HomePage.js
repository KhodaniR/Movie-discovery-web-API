import React, { useEffect, useState } from 'react';
import { fetchTopMovies } from '../api';

function HomePage() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function getTopMovies() {
      const data = await fetchTopMovies();
      setTopMovies(data.results);
    }

    getTopMovies();
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="movie-grid">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
