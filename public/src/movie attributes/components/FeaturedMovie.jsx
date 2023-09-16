import { useEffect, useState } from 'react'
import axios from 'axios'
import FeaturedCard from './MovieCard'
import requests from '../Request'

const FeaturedMovie = () => {
  const [items, setItems] = useState([])

  useEffect((item) => {
    axios
      .get(requests.requestTopRated + Math.floor(Math.random() * 100))
      .then((response) => {
        const randomMovies = response.data.results.slice(0, 10)
        setItems(randomMovies)
      })
  }, [])
  return (
    <div className="mt-24 px-10 flex flex-col items-center justify-center ">
      <div className="flex flex-col">
        <div className="flex flex-col  gap-4 md:flex-row md:items-center justify-between">
          <h2 className=" font-bold text-2xl flex">Featured Movie</h2>
          <p className="text-red-700">see more </p>
        </div>
        <div className="w-full mt-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((movie) => (
            <FeaturedCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedMovie
