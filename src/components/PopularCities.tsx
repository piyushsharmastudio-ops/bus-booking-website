'use client';

import { useState } from 'react';

export default function PopularCities() {
  const [activeTab, setActiveTab] = useState<'cities' | 'connections'>('cities');

  const cities = [
    ['Delhi', 'Lucknow', 'Gurugram', 'Manali', 'Coimbatore'],
    ['Bengaluru', 'Chandigarh', 'Jaipur', 'Greater Noida', 'Agra'],
    ['Hyderabad', 'Dehradun', 'Vijayawada', 'Bareilly', ''],
    ['Chennai', 'Pune', 'Mumbai', 'Noida', ''],
    ['', '', '', 'Visakhapatnam', ''],
    ['', '', '', 'Haridwar', '']
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Popular Cities and Connections
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-300">
          <button
            className={`px-6 py-3 font-semibold ${
              activeTab === 'cities'
                ? 'text-flixbus-green border-b-2 border-flixbus-green'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('cities')}
          >
            Cities
          </button>
          <button
            className={`px-6 py-3 font-semibold ${
              activeTab === 'connections'
                ? 'text-flixbus-green border-b-2 border-flixbus-green'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('connections')}
          >
            Connections
          </button>
        </div>

        {/* Cities Grid */}
        {activeTab === 'cities' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.flat().filter(city => city).map((city, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-flixbus-green hover:underline"
              >
                {city}
              </a>
            ))}
          </div>
        )}

        {/* Connections would go here - similar structure */}
      </div>
    </section>
  );
}
