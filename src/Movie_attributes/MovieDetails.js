import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopMovies as fetchMovieDetails } from "../Api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
