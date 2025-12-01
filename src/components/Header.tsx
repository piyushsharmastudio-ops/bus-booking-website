export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-flixbus-dark">piyush sharma bus</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Plan Your Journey
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Service
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Trip Tracker</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Help</a>
          </nav>

          {/* Right side - Language and Auth */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm text-gray-700">
              <span className="mr-2">🇺🇸</span>
              English
            </button>
            <button className="flex items-center text-sm text-gray-700">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Register / Sign In
            </button>
          </div>
        </div>

        {/* Contact number */}
        <div className="text-sm text-gray-600 pb-2">
          📞 Call to book <span className="font-semibold">9569254804</span>
        </div>
      </div>
    </header>
  );
}
