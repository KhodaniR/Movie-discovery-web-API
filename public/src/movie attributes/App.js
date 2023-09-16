import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Home, MovieDetails } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
