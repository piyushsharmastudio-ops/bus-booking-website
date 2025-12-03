'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Help() {
  const [activeCategory, setActiveCategory] = useState('booking');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'booking', name: 'Booking & Tickets', icon: '🎫' },
    { id: 'tracking', name: 'Trip Tracking', icon: '📍' },
    { id: 'payment', name: 'Payment & Refunds', icon: '💰' },
    { id: 'cancellation', name: 'Cancellation', icon: '❌' },
    { id: 'account', name: 'Account & Profile', icon: '👤' },
    { id: 'contact', name: 'Contact Us', icon: '📞' }
  ];

  const faqs = {
    booking: [
      {
        question: 'How do I book a bus ticket?',
        answer: 'Booking is simple! Follow these steps:\\n\\n1. Go to the homepage and enter your departure city, destination, and travel date\\n2. Click "Search" to see available buses\\n3. Select your preferred bus and seat\\n4. Enter passenger details\\n5. Make payment using your preferred method\\n6. Receive your e-ticket via email and SMS\\n\\nExample: If you want to travel from Delhi to Manali on Dec 15th, enter "Delhi" in the From field, "Manali" in the To field, select Dec 15th as the date, and click Search.',
        example: true
      },
      {
        question: 'Can I book tickets for multiple passengers?',
        answer: 'Yes! You can book up to 6 tickets in a single booking. Simply select the number of passengers during the search and choose multiple seats from the seat layout.',
        example: false
      },
      {
        question: 'What documents do I need to board the bus?',
        answer: 'You need:\\n• Valid government-issued photo ID (Aadhaar Card, PAN Card, Driving License, Passport)\\n• E-ticket (printed or on your mobile phone)\\n• Booking ID/PNR number\\n\\nExample: Show your Aadhaar Card along with the e-ticket on your phone to the bus conductor when boarding.',
        example: true
      },
      {
        question: 'How early should I arrive at the boarding point?',
        answer: 'We recommend arriving at least 15-30 minutes before the departure time to avoid any last-minute rush.',
        example: false
      }
    ],
    tracking: [
      {
        question: 'How do I track my bus in real-time?',
        answer: 'To track your bus:\\n\\n1. Go to the Trip Tracker page\\n2. Enter your Booking ID or Bus Number\\n3. Click "Track Live"\\n4. View your bus location on the map with estimated arrival time\\n\\nExample: If your booking ID is "BUS123456", enter it in the tracker and you will see your bus exact location, current speed, and ETA to your boarding point.',
        example: true
      },
      {
        question: 'Will I get notifications about my bus location?',
        answer: 'Yes! You will receive SMS and email alerts when:\\n• Bus departs from the source\\n• Bus is 30 minutes away from your boarding point\\n• Any delays or route changes occur',
        example: false
      },
      {
        question: 'What if the tracking shows my bus is delayed?',
        answer: 'If there is a delay, you will be notified immediately. The tracker will show the updated ETA. You can also contact our 24/7 support at 9569254804 for assistance.',
        example: false
      }
    ],
    payment: [
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept:\\n• Credit/Debit Cards (Visa, Mastercard, RuPay)\\n• UPI (Google Pay, PhonePe, Paytm)\\n• Net Banking\\n• Digital Wallets (Paytm, Mobikwik)\\n• EMI options for bookings above ₹3,000',
        example: false
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Absolutely! We use 256-bit SSL encryption and are PCI-DSS compliant. Your payment information is never stored on our servers.',
        example: false
      },
      {
        question: 'How do I get a refund?',
        answer: 'Refund process:\\n\\n1. Go to "My Bookings" in your account\\n2. Select the ticket you want to cancel\\n3. Click "Cancel & Refund"\\n4. Refund will be processed within 5-7 business days\\n\\nExample: If you cancel a ₹1,000 ticket 24 hours before departure, you will get ₹750 back (25% cancellation fee applies). The amount will be credited to your original payment method.',
        example: true
      },
      {
        question: 'What are the refund charges?',
        answer: 'Cancellation charges:\\n• More than 48 hours before: 10% of ticket price\\n• 24-48 hours before: 25% of ticket price\\n• 12-24 hours before: 50% of ticket price\\n• Less than 12 hours: No refund\\n\\nExample: For a ₹2,000 ticket cancelled 30 hours before departure, you will pay ₹500 (25%) as cancellation fee and get ₹1,500 refunded.',
        example: true
      }
    ],
    cancellation: [
      {
        question: 'How do I cancel my ticket?',
        answer: 'To cancel your ticket:\\n\\n1. Log in to your account\\n2. Go to "My Bookings"\\n3. Find your ticket and click "Cancel"\\n4. Confirm cancellation\\n5. Receive cancellation confirmation and refund details via email\\n\\nExample: Login → My Bookings → Select Ticket BUS789012 → Click Cancel → Confirm → Get ₹850 refund (for ₹1,000 ticket with 15% fee)',
        example: true
      },
      {
        question: 'Can I cancel partial tickets from a group booking?',
        answer: 'Yes! If you booked 4 tickets and want to cancel only 2, you can select specific passengers during cancellation. Charges apply per ticket.',
        example: false
      },
      {
        question: 'What if I miss my bus?',
        answer: 'Unfortunately, no refund is provided for missed buses. However, you can contact support immediately to check if the seat can be transferred to the next available bus (subject to availability and charges).',
        example: false
      }
    ],
    account: [
      {
        question: 'How do I create an account?',
        answer: 'Creating an account:\\n\\n1. Click "Register" in the top right corner\\n2. Enter your name, email, and phone number\\n3. Create a password\\n4. Verify your email and phone via OTP\\n5. Your account is ready!\\n\\nExample: Enter name "Piyush Sharma", email "piyush@example.com", phone "9569254804", create password → Verify OTP → Done!',
        example: true
      },
      {
        question: 'I forgot my password. What should I do?',
        answer: 'Click "Forgot Password" on the login page, enter your registered email, and we will send you a password reset link. Follow the link to create a new password.',
        example: false
      },
      {
        question: 'How do I update my profile information?',
        answer: 'Go to "My Profile" after logging in. You can update your name, email, phone number, and add frequent traveler details for faster bookings.',
        example: false
      }
    ],
    contact: [
      {
        question: 'How can I contact customer support?',
        answer: 'We are here to help 24/7!\\n\\nPhone: 9569254804\\nWhatsApp: 9569254804\\nEmail: support@busservice.com\\nLive Chat: Click the chat icon on any page\\n\\nExample: For urgent issues like bus delay or emergency, call 9569254804. For general queries, use live chat or email.',
        example: true
      },
      {
        question: 'What are your office hours?',
        answer: 'Our customer support is available 24/7, 365 days a year. You can reach us anytime for assistance!',
        example: false
      },
      {
        question: 'How long does it take to get a response?',
        answer: '• Live Chat: Instant to 5 minutes\\n• Phone: Immediate\\n• Email: Within 2-4 hours\\n• WhatsApp: Within 15-30 minutes',
        example: false
      }
    ]
  };

  const quickGuides = [
    {
      title: 'First Time Booking',
      icon: '🎯',
      steps: [
        'Create an account or continue as guest',
        'Search for your route and date',
        'Select your preferred bus and seat',
        'Enter passenger details',
        'Make payment and get instant e-ticket'
      ]
    },
    {
      title: 'Track Your Bus',
      icon: '📍',
      steps: [
        'Go to Trip Tracker page',
        'Enter your Booking ID',
        'View live location on map',
        'Check estimated arrival time',
        'Get real-time notifications'
      ]
    },
    {
      title: 'Cancel & Get Refund',
      icon: '💰',
      steps: [
        'Login to your account',
        'Go to My Bookings',
        'Select ticket to cancel',
        'Confirm cancellation',
        'Receive refund in 5-7 days'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">❓</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Can We Help You?
          </h1>
          <p className="text-xl mb-8">
            Find answers to common questions and get support
          </p>
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help (e.g., how to book, cancel ticket, track bus)"
                className="w-full px-6 py-4 pr-12 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="tel:9569254804" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all text-center">
            <div className="text-4xl mb-2">📞</div>
            <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
            <p className="text-blue-600 font-semibold">9569254804</p>
            <p className="text-sm text-gray-600">24/7 Support</p>
          </a>
          <button className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all text-center">
            <div className="text-4xl mb-2">💬</div>
            <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
            <p className="text-green-600 font-semibold">Chat Now</p>
            <p className="text-sm text-gray-600">Instant Response</p>
          </button>
          <a href="mailto:support@busservice.com" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all text-center">
            <div className="text-4xl mb-2">📧</div>
            <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
            <p className="text-purple-600 font-semibold text-sm">support@busservice.com</p>
            <p className="text-sm text-gray-600">Reply in 2-4 hours</p>
          </a>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          📚 Quick Start Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickGuides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-5xl mb-4 text-center">{guide.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {guide.title}
              </h3>
              <ol className="space-y-3">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ❓ Frequently Asked Questions
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg overflow-hidden ${
                  faq.example ? 'border-2 border-green-500' : 'border border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {faq.example && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                        EXAMPLE
                      </span>
                    )}
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8">
            Our support team is ready to assist you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9569254804"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              📞 Call: 9569254804
            </a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              💬 Start Live Chat
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
