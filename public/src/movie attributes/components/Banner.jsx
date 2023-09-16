import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Request'
import IMDB from '../assets/imdb.svg'
import Play from '../assets/Play.svg'

const Banner = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div id="/" className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute  top-0 bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute flex flex-col gap-4 max-w-[55%] top-[12%] p-8 md:px-16  ">
          <h1 className="text-xl mt-8 md:text-3xl lg:text-5xl font-bold">
            {movie?.title} :
          </h1>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src={IMDB} className="h-[17px] w-[35px]" alt="imdb" />
              <span>{parseFloat(movie?.vote_average) * 10}.0/100</span>
            </div>
            <div>
              <span>{parseFloat(movie?.vote_average) * 10}%</span>
            </div>
          </div>
          <p className="w-full line-clamp-4  text-gray-200  text-lg md:text-xl">
            {movie?.overview}
          </p>
          <a
            href="href"
            className="w-[169px] h-[36px] flex items-center justify-center gap-2 bg-rose-700 rounded-lg capitalize"
          >
            <img src={Play} alt="play" />
            <span> Watch Now</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
