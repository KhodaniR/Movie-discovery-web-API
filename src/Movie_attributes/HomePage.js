import React, { useEffect, useState } from "react";
import { fetchTopMovies } from "../Api";
// import {Movie}
import MovieCard from "./MovieCard";

function HomePage() {
  const [topMovies, setTopMovies] = useState([]);
  const [search, setSearch] = useState("");

  Effect(() => {
    const fetchData = async () => {
      try {        let apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=2f3d300c8b20dd64c1d363bb91a7daa0`;
        if(search !==""){
          apiUrl = `https://api.themoviedb.org/3/search/movie?query=${search}&page=1&api_key=2f3d300c8b20dd64c1d363bb91a7daa0`;
        }
        console.log(search);
        const response =  await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const slicedArray = data.results.slice(0, 10);
          setMovies(slicedArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [search])

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
