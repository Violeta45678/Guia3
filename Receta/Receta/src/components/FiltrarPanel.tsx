

interface FilterPanelProps {
  categories: string[]
  activeFilters: string[]
  onToggleFilter: (category: string) => void
}

const FilterPanel = ({ categories, activeFilters, onToggleFilter }: FilterPanelProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl mb-6 sticky">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Filtrar Categorías</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onToggleFilter(category)}
            className={`flex items-center justify-center gap-1 p-2 rounded-full text-xs sm:text-sm transition-all ${
              activeFilters.includes(category)
                ? 'bg-green-100 text-green-800 border border-green-300 font-bold'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-green-200'
            }`}
          >
            {activeFilters.includes(category) ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : null}
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPanel