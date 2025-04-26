import { useState, useEffect } from 'react'
import useFetchData from '../hooks/useFetchData'
import useNotification from '../hooks/useNotification'
import RecipeCard from '../components/RecipeCard'
import FilterPanel from '../components/FiltrarPanel'
import LoadingSpinner from '../components/LoadingSpin'
import { Recipe } from '../types/Recipe'

const Principal = () => {
  const { data: recipesData, loading: isLoading, error: fetchError } = useFetchData<{ recipes: Recipe[] }>(
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=salad'
  )
  const { notify: showNotification } = useNotification()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const availableCategories = Array.from(new Set(recipesData?.recipes?.map(recipe => recipe.publisher) || []))
  const visibleRecipes = recipesData?.recipes?.filter(recipe => {
    if (selectedCategories.length === 0) return true
    return selectedCategories.includes(recipe.publisher)
  }) || []

  const handleToggleFavorite = (recipe: Recipe) => {
    const isCurrentlyFavorite = favoriteRecipes.some(favRecipe => favRecipe.id === recipe.id)

    if (isCurrentlyFavorite) {
      const updatedFavorites = favoriteRecipes.filter(favRecipe => favRecipe.id !== recipe.id)
      setFavoriteRecipes(updatedFavorites)
      showNotification(`${recipe.title} se eliminó de favoritos`, 'info')
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipe])
      showNotification(`${recipe.title} se agregó a favoritos`, 'success')
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes))
  }, [favoriteRecipes])

  const handleCategoryFilter = (category: string) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(currentCategory => currentCategory !== category)
        : [...prevCategories, category]
    )
  }

  if (isLoading) return <LoadingSpinner fullScreen message="Cargando recetas..." />
  if (fetchError) return <div className="text-center py-8 text-red-500">Error al cargar recetas: {fetchError}</div>

  return (
    <div className="max-w-4xl mx-auto">
      <FilterPanel
        categories={availableCategories}
        activeFilters={selectedCategories}
        onToggleFilter={handleCategoryFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favoriteRecipes.some(favRecipe => favRecipe.id === recipe.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default Principal