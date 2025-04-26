import { Routes, Route } from 'react-router-dom'
import Home from './pages/Principal'
import Favorites from './pages/recetasFav'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default AppRoutes