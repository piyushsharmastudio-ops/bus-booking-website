'use client';

import { useState } from 'react';

export default function ContentSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Online Bus Booking with FlixBus
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
            Traveling with Flixbus is affordable, comfortable, and hassle-free. With our easy online bus booking platform, you can plan trips across India in just a few clicks. Whether you&apos;re looking to buy bus tickets for a cultural gateway to Delhi a beach escape in Goa, a heritage tour in Lucknow, or a vibrant city break in Mumbai, FlixBus connects you to the destinations you love.
          </p>
          
          <p>
            Choose from semi-sleeper coaches for comfortable day travel or sleeper buses for relaxing overnight journeys. With every bus ticket booking, you&apos;ll enjoy spacious seats, onboard amenities, and smooth connections between popular cities – all at great prices. Whether it&apos;s a short trip or a long-distance adventure, FlixBus makes it simple to book and travel with confidence.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
            How to book bus tickets with FlixBus
          </h3>
          
          <p>
            Bus ticket booking has never been this easy. With our online bus booking platform you can now secure your spot on the bus and access many other services we offer.
          </p>

          {isExpanded && (
            <div className="space-y-4">
              <p>
                Simply enter your departure and arrival cities, select your travel dates, and browse available buses. You can compare prices, departure times, and amenities to find the perfect option for your journey. Once you&apos;ve made your selection, complete your booking securely online and receive your ticket instantly.
              </p>
              
              <p>
                FlixBus offers flexible payment options and easy modifications to your booking if your plans change. Track your bus in real-time and enjoy peace of mind knowing you&apos;re traveling with India&apos;s most trusted bus service.
              </p>
            </div>
          )}
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-flixbus-green hover:underline font-semibold mt-4 flex items-center"
          >
            {isExpanded ? 'Show less' : 'Continue reading'}
            <svg 
              className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
