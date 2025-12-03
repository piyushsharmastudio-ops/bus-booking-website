import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlanJourney() {
  const features = [
    {
      icon: "🔍",
      title: "Discover the Best Bus Routes",
      description: "Search and explore all available bus services across cities and states.",
      points: [
        "View multiple routes in one place",
        "Find the shortest, fastest, or cheapest option",
        "Compare private and government bus operators"
      ]
    },
    {
      icon: "🕒",
      title: "Check Real-Time Schedules",
      description: "Stay updated with the latest timings:",
      points: [
        "Live departure & arrival information",
        "Expected delays or rescheduled trips",
        "Easy day-wise and date-wise schedule lookup"
      ]
    },
    {
      icon: "🎫",
      title: "Smart Ticket Booking Made Easy",
      description: "Book your seat in just a few clicks:",
      points: [
        "Instant seat selection",
        "Secure online payment",
        "E-ticket on your phone",
        "Cancel or reschedule anytime"
      ]
    },
    {
      icon: "📍",
      title: "Track Your Bus Live",
      description: "Know exactly where your bus is:",
      points: [
        "Real-time bus GPS tracking",
        "Estimated arrival time",
        "Route map and intermediate stops"
      ]
    },
    {
      icon: "🧭",
      title: "Plan with Confidence",
      description: "Whether you're traveling alone or with family, you can:",
      points: [
        "Check baggage rules",
        "Choose your preferred seat type (Sleeper/Seater/AC/Non-AC)",
        "Read reviews from other passengers",
        "Explore discounts and offers"
      ]
    }
  ];

  const benefits = [
    "Easy-to-use interface",
    "Verified bus operators",
    "Transparent prices",
    "24/7 customer support"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-flixbus-green to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚍</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey Starts With a Plan
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Traveling by bus should be comfortable, convenient, and hassle-free. Whether you&apos;re commuting daily, 
            taking a weekend getaway, or planning a long-distance trip, we help you build the perfect route from start to finish.
          </p>
          <p className="text-lg mt-4">
            Our platform makes it easy to explore routes, compare schedules, check fares, and enjoy a seamless booking experience.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-flixbus-green mr-2 text-xl">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              {index === 1 && (
                <p className="text-sm text-gray-500 italic mt-4">
                  Your time is valuable — we make sure you never wait unnecessarily.
                </p>
              )}
              {index === 2 && (
                <p className="text-sm text-gray-500 italic mt-4">
                  Traveling has never been this simple.
                </p>
              )}
              {index === 3 && (
                <p className="text-sm text-gray-500 italic mt-4">
                  No more uncertainty — stay informed throughout your journey.
                </p>
              )}
              {index === 4 && (
                <p className="text-sm text-gray-500 italic mt-4">
                  Make well-informed decisions every time you travel.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🛣 Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 text-left"
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">✨</span>
                  <span className="text-lg font-semibold text-gray-900">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-8">
            We are committed to providing you with the most reliable and comfortable bus travel experience.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-flixbus-dark to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl font-bold mb-4">
            Start Planning Your Journey Today
          </h2>
          <p className="text-xl mb-3">Ready for your next ride?</p>
          <p className="text-lg mb-8">
            Search, compare, book, and travel smarter — all in one place.
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-2xl font-semibold">Plan your future bus journey with confidence.</p>
            <p className="text-xl">Your destination, our responsibility.</p>
          </div>
          <a 
            href="/"
            className="inline-block bg-flixbus-green hover:bg-green-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Journey →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
