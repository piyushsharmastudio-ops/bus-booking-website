export default function WhereToNext() {
  const cities = [
    { name: 'Mexico City', country: 'Mexico - America' },
    { name: 'Mumbai', country: 'Mumbai - India' },
    { name: 'London', country: 'London - England' },
    { name: 'New York', country: 'New York - United States' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Where to next?
            </h2>
            <p className="text-gray-700 mb-6">
              Discover our travel map with over 6000 destinations worldwide.
            </p>
            <button className="bg-flixbus-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center transition-colors">
              🗺️ Explore the map
            </button>
          </div>

          {/* Right - City Cards */}
          <div className="relative">
            <div className="flex flex-col gap-3">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex items-center justify-center text-2xl">
                      🏙️
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{city.name}</h3>
                      <p className="text-sm text-gray-600">{city.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Decorative illustration */}
            <div className="absolute -bottom-8 right-0 opacity-50">
              <svg width="150" height="100" viewBox="0 0 150 100" fill="none">
                <rect x="60" y="20" width="80" height="60" fill="#e2e8f0" rx="4"/>
                <rect x="50" y="30" width="50" height="40" fill="#cbd5e0" rx="4"/>
                <rect x="30" y="40" width="40" height="35" fill="#a0aec0" rx="4"/>
                <ellipse cx="120" cy="85" rx="25" ry="8" fill="#68d391"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
