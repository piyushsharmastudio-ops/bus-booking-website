'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TripTracker() {
  const [trackingId, setTrackingId] = useState('');

  const keyFeatures = [
    {
      icon: "📍",
      title: "Real-Time GPS Tracking",
      description: "Live map showing the exact location of the bus",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "⏰",
      title: "Estimated Arrival Time (ETA)",
      description: "Shows how long until the bus reaches your stop",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🗺️",
      title: "Bus Route Display",
      description: "Full route, stops, pickup & drop points",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "👨‍✈️",
      title: "Driver & Bus Details",
      description: "Driver name, contact info, bus number, vehicle type",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "🚨",
      title: "Safety Alerts",
      description: "Overspeed alerts, emergency notifications",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "⚡",
      title: "Live Speed Indicator",
      description: "Shows current bus speed",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: "🔔",
      title: "Passenger Notifications",
      description: "SMS/Email/Push alerts for delays or changes",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: "🚌",
      title: "Multi-Bus Tracking",
      description: "Track multiple buses for group or event travel",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "✨",
      title: "Luxury Add-ons",
      description: "AC temperature, entertainment, seat occupancy view",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: "⏱️",
      title: "Zero Waiting Time",
      description: "Track bus arrival instead of waiting at stop"
    },
    {
      icon: "🛡️",
      title: "Travel Confidence",
      description: "Family can track bus for safety"
    },
    {
      icon: "💎",
      title: "Premium Experience",
      description: "Smooth travel planning for weddings & events"
    },
    {
      icon: "💼",
      title: "Corporate Reliability",
      description: "Perfect for company travel & employee transport"
    },
    {
      icon: "👁️",
      title: "Full Transparency",
      description: "Always know where the bus is and journey time"
    }
  ];

  const useCases = [
    { icon: "👨‍👩‍👧‍👦", title: "Family Travelers", desc: "Track bus for safety & timing" },
    { icon: "🎒", title: "Tour Groups", desc: "Manage group travel smoothly" },
    { icon: "💒", title: "Wedding Guests", desc: "Know exact pickup timing" },
    { icon: "🎓", title: "Schools/Colleges", desc: "Students & parents track buses" },
    { icon: "💼", title: "Corporate Teams", desc: "Timely arrival for meetings/events" }
  ];

  const technology = [
    { icon: "🛰️", tech: "GPS & IoT Sensors", purpose: "Real-time location tracking" },
    { icon: "☁️", tech: "Cloud Server", purpose: "Live updates every few seconds" },
    { icon: "📱", tech: "Mobile App / Web Portal", purpose: "User-friendly tracking interface" },
    { icon: "🤖", tech: "AI-Based ETA", purpose: "Predicts arrival time accurately" },
    { icon: "🗺️", tech: "Map Integration", purpose: "Smooth navigation display (Google/Mapbox)" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Live Tracker */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🚌📍</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Luxury Bus Trip Tracker
            </h1>
            <p className="text-xl md:text-2xl mb-2">
              Track Your Bus in Real-Time with Complete Accuracy
            </p>
            <p className="text-lg">
              Live location • Arrival time • Driver details • Safety alerts
            </p>
          </div>

          {/* Tracking Input */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Track Your Bus Now
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Booking ID or Bus Number"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg text-gray-900 text-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
                🔍 Track Live
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Enter your tracking ID to see live bus location and ETA
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-sm">Buses Tracked Daily</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Live Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          🎯 Powerful Tracking Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-3xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            📱 User Dashboard Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "🗺️", title: "Home Map", desc: "Bus on live map" },
              { icon: "🎫", title: "My Trips", desc: "Saved bookings" },
              { icon: "📊", title: "Live Status", desc: "Speed, distance, stops" },
              { icon: "🔔", title: "Notifications", desc: "All alerts" },
              { icon: "🆘", title: "Support", desc: "24/7 help & SOS" }
            ].map((section, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="font-bold mb-2">{section.title}</h3>
                <p className="text-sm text-gray-300">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ✅ Why Use Our Trip Tracker?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            👥 Who Uses Our Tracker?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            ⚙️ Advanced Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technology.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{tech.tech}</h3>
                    <p className="text-sm text-gray-200">{tech.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Tracking Your Journey Today!
          </h2>
          <p className="text-xl mb-8">
            Never miss your bus • Stay informed • Travel with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              📍 Track Your Bus Live
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              🔔 Get Instant Notifications
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              🗺️ View Route & ETA
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
