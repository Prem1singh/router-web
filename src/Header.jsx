import React from 'react'
import { NavLink ,Link} from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">My Blog</Link>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/blog" className="hover:text-gray-400">Blog</NavLink>
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/login" className="hover:text-gray-400">Log In</NavLink>
        </nav>
      </div>
    </header>

  )
}
