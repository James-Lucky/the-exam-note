import React from 'react'

const Nav = () => {
  return (
    <header className="bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-2xl font-black text-white tracking-tight group-hover:text-purple-200 transition-colors">
            The Exam Note
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-gray-300 hover:text-white font-medium transition-colors relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button className="text-gray-300 hover:text-white font-medium transition-colors relative group">
            Past Papers
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button className="text-gray-300 hover:text-white font-medium transition-colors relative group">
            Results
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button className="text-gray-300 hover:text-white font-medium transition-colors relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          
          <button className="px-6 py-2 bg-white text-purple-900 rounded-full font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-purple-500/50">
            Login / Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Nav