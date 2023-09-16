import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import SearchImg from '../assets/Search.svg'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <form
      onKeyDown={handleSearch}
      className="w-[600px] h-[44px] flex items-center ring-2 ring-gray-300 rounded-lg"
    >
      <input
        type="search"
        placeholder="What do you want to watch ?"
        className="text-white px-2 w-full h-full rounded-l-lg bg-transparent outline-0 placeholder:text-white placeholder:px-2"

        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img src={SearchImg} className='w-8  flex items-center' alt='search'/>
      <button
        className=" bg-stone-800 text-white text-xl w-32 h-full font-bold rounded-r-md"
        onClick={handleSearch}
      >
        Search

        </button>

    </form>
  )
}

export default SearchBar
