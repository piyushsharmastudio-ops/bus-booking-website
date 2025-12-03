import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LuxuryService() {
  const premiumFeatures = [
    {
      icon: "💺",
      title: "Luxury Seating",
      description: "Recliner seats, leather upholstery, leg rest, extra leg room"
    },
    {
      icon: "📺",
      title: "Entertainment",
      description: "LED screens, Wi-Fi, music system, movie library"
    },
    {
      icon: "⚡",
      title: "Comfort Amenities",
      description: "AC, charging ports, blankets, water bottles"
    },
    {
      icon: "🛡️",
      title: "Safety",
      description: "GPS tracking, trained drivers, speed monitoring, emergency systems"
    },
    {
      icon: "✨",
      title: "Cleanliness",
      description: "Regular sanitization, fresh interior, odor-free environment"
    },
    {
      icon: "🎁",
      title: "Special Add-ons",
      description: "Snacks, tour guide, onboard staff, customized route"
    }
  ];

  const fleet = [
    {
      type: "Mini Luxury Bus",
      capacity: "12–20 Seats",
      purpose: "Small groups, corporate meetings",
      icon: "🚐"
    },
    {
      type: "Executive Coach",
      capacity: "30–40 Seats",
      purpose: "Weddings, tours, VIP travel",
      icon: "🚌"
    },
    {
      type: "Premium Volvo/Scania",
      capacity: "45–55 Seats",
      purpose: "Long routes, large groups",
      icon: "🚍"
    },
    {
      type: "Electric / Eco Coaches",
      capacity: "40–50 Seats",
      purpose: "Eco-friendly luxury journeys",
      icon: "🔋"
    }
  ];

  const tripTypes = [
    { icon: "💼", title: "Corporate Travel", desc: "Office travel, conferences, business trips" },
    { icon: "🗺️", title: "Tour Packages", desc: "Outstation trips, sightseeing tours" },
    { icon: "💒", title: "Wedding Transport", desc: "Guest pick-up/drop, baraat travel" },
    { icon: "🎓", title: "School / College Trips", desc: "Picnics, educational tours" },
    { icon: "✈️", title: "Airport Transfers", desc: "Group airport pickup and drop" },
    { icon: "🎬", title: "Event Transport", desc: "Film shoots, sports teams, VIP events" }
  ];

  const bookingSteps = [
    { step: "1", title: "Inquiry", desc: "Contact via website, WhatsApp, or call" },
    { step: "2", title: "Quotation", desc: "Get bus options and pricing" },
    { step: "3", title: "Confirmation", desc: "Select bus and pay advance" },
    { step: "4", title: "Travel Day", desc: "Bus arrives on time with clean interior" },
    { step: "5", title: "Feedback", desc: "Share your review after trip" }
  ];

  const advantages = [
    { icon: "⭐", title: "Premium Experience", desc: "High quality interiors, smooth ride" },
    { icon: "👨‍✈️", title: "Professional Drivers", desc: "Trained and safety-certified" },
    { icon: "🗺️", title: "Custom Routes", desc: "Travel plan as per your choice" },
    { icon: "💰", title: "Affordable Luxury", desc: "Premium quality without heavy cost" },
    { icon: "📞", title: "24/7 Support", desc: "Customer care anytime" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚌✨</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Luxury Bus Trip Service
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Premium / Luxury Bus Travel Experience
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <span>💼 Corporate Groups</span>
            <span>👨‍👩‍👧‍👦 Families</span>
            <span>🎉 Wedding Guests</span>
            <span>⭐ VIP Clients</span>
          </div>
          <p className="text-xl mt-6 font-semibold">
            High-comfort, safe, and enjoyable long/short-distance travel
          </p>
        </div>
      </section>

      {/* Premium Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          🌟 Premium Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Information */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🚍 Our Premium Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((bus, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-all"
              >
                <div className="text-6xl mb-4 text-center">{bus.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {bus.type}
                </h3>
                <div className="bg-indigo-600 text-white text-center py-2 rounded-lg mb-3 font-semibold">
                  {bus.capacity}
                </div>
                <p className="text-sm text-gray-700 text-center">{bus.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          🎯 Types of Trips We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tripTypes.map((trip, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-3">{trip.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {trip.title}
              </h3>
              <p className="text-gray-600">{trip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📋 Simple Booking Process
          </h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-600" style={{top: '2rem'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {bookingSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          🏆 Why Choose Our Luxury Service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{adv.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-gray-700">{adv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for a Luxury Journey?
          </h2>
          <p className="text-xl mb-8">
            Experience premium travel with our luxury bus service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9569254804"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              📞 Call: 9569254804
            </a>
            <a 
              href="/"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              💬 WhatsApp Us
            </a>
            <a 
              href="/"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              🎫 Book Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
