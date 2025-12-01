'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [tripType, setTripType] = useState<'oneWay' | 'roundTrip'>('oneWay');

  return (
    <div className="relative">
      {/* Hero Image Background */}
      <div 
        className="h-[calc(70vh-62px)] bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/zoshua-colah-1Rk_G-kxC4g-unsplash.jpg')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">piyush sharma bus</h1>
            <p className="text-2xl text-white">Low cost travel in India by bus</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto -mt-16 relative z-10 px-4">
        <div className="bg-white rounded-lg shadow-xl p-6">
          {/* Trip Type Toggle */}
          <div className="flex gap-4 mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
                className="w-4 h-4 text-flixbus-green"
              />
              <span className="ml-2 text-gray-700">One Way</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'roundTrip'}
                onChange={() => setTripType('roundTrip')}
                className="w-4 h-4 text-flixbus-green"
              />
              <span className="ml-2 text-gray-700">Round Trip</span>
            </label>
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* From */}
            <div className="md:col-span-3">
              <label className="block text-sm text-gray-600 mb-1">From</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">📍</span>
                <input
                  type="text"
                  placeholder="Delhi"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flixbus-green focus:border-transparent"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="md:col-span-1 flex items-end justify-center pb-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>

            {/* To */}
            <div className="md:col-span-3">
              <label className="block text-sm text-gray-600 mb-1">Destination</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">📍</span>
                <input
                  type="text"
                  placeholder="Manali"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flixbus-green focus:border-transparent"
                />
              </div>
            </div>

            {/* Date */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Departure</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">📅</span>
                <input
                  type="text"
                  placeholder="Today, 1 Dec"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flixbus-green focus:border-transparent"
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Passengers</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flixbus-green focus:border-transparent">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 flex items-end">
              <button className="w-full bg-flixbus-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
