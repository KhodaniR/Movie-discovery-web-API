import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SearchList = ({ query }) => {
  const [searchResults, setSearchResults] = useState([])

  const apiKey = process.env.REACT_APP_TMDB_API_KEY

  useEffect(() => {
    // Fetch movie data from the TMDb API based on the search query
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
      )
      .then((response) => {
        setSearchResults(response.data.results)
      })
      .catch((error) => {
        console.error('Error fetching search results:', error)
      })
  }, [query])

  return (
    <div className="mt-8 p-4">
      <h2 className="text-xl px-4 font-semibold mb-4">
        Search Results for "{query}"
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div
              data-testid="movie-card"
              key={movie.id}
              className="bg-white p-4 shadow-md"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 data-testid="movie-title" className="text-lg font-semibold">
                {movie.title}
              </h2>
              <p data-testid="movie-release-date" className="text-gray-600">
                {movie.release_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchList
