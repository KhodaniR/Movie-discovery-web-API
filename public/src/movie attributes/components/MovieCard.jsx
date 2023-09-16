import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tomato from '../assets/tomato.svg'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

const FeaturedCard = ({ movie }) => {

    // Use a unique identifier (e.g., cardId) for each card
  const localStorageKey = `isLiked_${movie?.title}`;

  // Initialize the liked state from local storage or default to false
  const [isLiked, setIsLiked] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || false
  );

  // Function to toggle the like state and store it in local storage
  const toggleLike = () => {
    const updatedLikeState = !isLiked;
    setIsLiked(updatedLikeState);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLikeState));
  };


  return (
    <div className="w-[220px] overflow-hidden">
      <div
        className="rounded-b-lg border-2 overflow-hidden border-gray-4300 w-full flex flex-col  "
        data-testid="movie-card"
      >
        <div className="relative">
          <img
            className="flex h-[370px] w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
            data-testid="movie-poster"
          />

          <div onClick={toggleLike} className="absolute right-2 top-2 w-12 h-12 cursor-pointer">
            {isLiked ? (
              <AiTwotoneHeart className=" w-full h-full text-red-500" />
            ) : (
              <AiOutlineHeart className=" w-full h-full text-red-500" />
            )}
          </div>
       
        </div>
        <Link to={`/movie/${movie.id}`}>
          <div className="h-[120px] py-4 px-2 w-full flex flex-col items-start justify-center hover:bg-stone-600 hover:text-white">
            <h2
              className="font-bold text-md line-clamp-2 flex flex-wrap"
              data-testid="movie-title"
            >
              {movie?.title}
            </h2>

            <div className="mt-2 flex flex-col gap-0 items-start justify-start lg:flex-row lg:gap-2 lg:items-center lg:justify-center">
              <p data-testid="movie-release-date">{movie?.release_date}</p>
              <div className="flex items-center">
                <p className="py-[1px] flex items-center gap-[1px]">
                  {movie?.vote_average}
                </p>
                <img src={Tomato} alt="tomato" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCard
