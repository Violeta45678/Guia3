import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <nav className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2"> Recetas Saludables</h1>
          <div className="flex gap-6 font-medium">
            <Link to="/" className="hover:text-green-600 transition-colors px-3 py-1 rounded-lg"> Principal</Link>
            <Link to="/favorites" className="hover:text-green-600 transition-colors px-3 py-1 rounded-lg">Recetas Favoritas</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">{children}</main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-lg font-semibold text-black-800">  Ensaladas</p>
          <p className="text-black-600"> Diseñado por: <span className="font-medium">Violeta Sofia Martínez Puente</span></p>
          <p className="text-gray-500 text-sm font-mono">MP21I04001</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
