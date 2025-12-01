export default function Footer() {
  const footerLinks = {
    'Bus Travel': [
      'All Bus Destinations',
      'Route Map',
      'Bus travel in India',
      'Overnight Buses',
      'Get the App'
    ],
    'Discover': [
      'Discover India',
      'Bus to Delhi',
      'Bus to Bangalore',
      'Bus to Hyderabad',
      'Bus to Manali',
      'Bus to Jodhpur',
      'Bus to Dehradun',
      'Bus to Lucknow',
      'Bus to Gorakhpur',
      'Bus to Varanasi'
    ],
    'FlixBus': [
      'About Flix',
      'General Conditions for Business and Booking',
      'General Terms and Conditions of Travel',
      'Jobs',
      'News Room',
      'Partner Agents Login'
    ],
    'Customer Care': [
      'Help',
      'Services',
      'Flix Lounge',
      'Manage My Booking',
      'Seat Reservations',
      'Luggage'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Instagram', icon: 'I' },
    { name: 'YouTube', icon: '▶' },
    { name: 'LinkedIn', icon: 'in' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-flixbus-green text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Flix App</h3>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                📱 android store img
              </div>
            </a>
            <a href="#" className="inline-block">
              <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                🍎 app store img
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            <p>© 2025 FlixBus India Pvt Ltd.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-flixbus-green">Contact us</a>
            <a href="#" className="hover:text-flixbus-green">Partner Agents Login</a>
            <a href="#" className="hover:text-flixbus-green">Privacy Policy</a>
            <a href="#" className="hover:text-flixbus-green">Photo Credits</a>
            <a href="#" className="hover:text-flixbus-green">Accessibility Statement</a>
            <a href="#" className="hover:text-flixbus-green">🌐 Change Cookie Settings</a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <span className="text-gray-900 font-semibold mr-2">Flix on:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-flixbus-green transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
