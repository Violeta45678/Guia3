import { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { Recipe } from '../types/Recipe'


const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('favoriteRecipes')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Mis Recetas Favoritas</h1>
        <p className="text-gray-600">No hay recetas agregadas</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">mis favoritas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={true}
            onToggleFavorite={(r) => {
              const updated = favorites.filter(fav => fav.id !== r.id)
              setFavorites(updated)
              localStorage.setItem('favoriteRecipes', JSON.stringify(updated))
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites