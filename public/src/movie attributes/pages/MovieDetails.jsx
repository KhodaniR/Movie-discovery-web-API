import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components'

import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [currentMovieDetail, setMovie] = useState()

  const utcReleaseDate = new Date(
    currentMovieDetail?.release_date,
  ).toUTCString()

  const { movieId } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [])

  const movieDetailsApiKey = process.env.REACT_APP_TMDB_MOVIEDETAILS_API_KEY

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieDetailsApiKey}&language=en-US`,
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }

  const backgroundURL = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original${
      currentMovieDetail ? currentMovieDetail.backdrop_path : ''
    }')`,
  }

  return (
    <div className="relative flex  h-100vh w-full">
      <Sidebar />
      <div className="  absolute left-56 flex flex-1  flex-col gap-10 text-white p-8">
        <div
          className="flex relative h-[500px] bg-cover bg-no-repeat  bg-center  rounded-3xl overflow-hidden"
          style={backgroundURL}
        ></div>
        <div className="  text-black flex flex-col gap-4 md:gap-10 lg:flex-row">
          <div className="flex flex-col items-start justify-center gap-4">
            <p
              className="flex font-bold text-2xl md:text-4xl"
              data-testid="movie-title"
            >
              {currentMovieDetail ? currentMovieDetail.original_title : ''}
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <p
                className="flex w-[90%] md:w-[70%] line-clamp-4"
                data-testid="movie-overview"
              >
                {currentMovieDetail ? currentMovieDetail.overview : ''}
              </p>
              <div className="flex flex-col">
                <span data-testid="movie-release-date">
                  {currentMovieDetail ? utcReleaseDate : ''}
                </span>
              </div>
              <div className="flex flex-col">
                <span data-testid="movie-runtime">
                  {currentMovieDetail ? currentMovieDetail.runtime : ''} mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
