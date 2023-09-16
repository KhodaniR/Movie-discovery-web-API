import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Header,
  Banner,
  SearchList,
  FeaturedMovie,
  Footer,
} from '../components'

const Home = ({ items, searched }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Banner />
      <div>
        {query ?
        <SearchList query={query} />
        :
        <FeaturedMovie />
        }
        </div>
      <Footer />
    </div>
  )
}

export default Home
