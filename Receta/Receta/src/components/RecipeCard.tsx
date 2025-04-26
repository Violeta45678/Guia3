import { Recipe } from '../types/Recipe'

interface RecipeCardProps {
  recipe: Recipe
  isFavorite: boolean
  onToggleFavorite: (recipe: Recipe) => void
}
const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 border
     border-gray-200 hover:border-green-300">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{recipe.title}</h3>
          <p className="text-sm text-gray-600">Clasificacion:
            <span className="ml-1  text-green-500">{recipe.publisher}</span>
          </p>
        </div>
        <button
          onClick={() => onToggleFavorite(recipe)}
          className={`mt-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
            isFavorite
              ? 'bg-green-500 hover:bg-green-600 text-white shadow-inner'
              : 'bg-white hover:bg-gray-50 text-green-500 border border-green-300 shadow-sm'
          }`}
        >
          {isFavorite ? ' Quitar de favoritos' : ' Agregar a favoritos'}
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
