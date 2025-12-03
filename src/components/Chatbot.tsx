'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! 👋 How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    '📍 Track my bus',
    '🎫 Book a ticket',
    '💰 Check prices',
    '📞 Contact support'
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    setMessages([...messages, { type: 'user', text: inputMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          type: 'bot', 
          text: 'Thank you for your message! Our support team will assist you shortly. You can also call us at 9569254804 for immediate help.' 
        }
      ]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { type: 'user', text: reply }]);
    
    setTimeout(() => {
      let botResponse = '';
      if (reply.includes('Track')) {
        botResponse = 'You can track your bus live by entering your booking ID on our Trip Tracker page. Would you like me to redirect you there?';
      } else if (reply.includes('Book')) {
        botResponse = 'Great! You can search and book tickets on our homepage. Just enter your departure and destination cities to get started.';
      } else if (reply.includes('prices')) {
        botResponse = 'Our ticket prices vary by route and bus type. Please search for your specific route to see accurate pricing. We offer luxury and standard options.';
      } else if (reply.includes('support')) {
        botResponse = 'You can reach our 24/7 support team at:\n📞 Phone: 9569254804\n💬 WhatsApp: Available\n📧 Email: support@busservice.com';
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all z-50 flex items-center gap-2 group"
        >
          <span className="text-2xl">💬</span>
          <span className="hidden group-hover:inline-block text-sm font-semibold pr-2">
            Chat with us
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-lg">Bus Support</h3>
                <div className="flex items-center gap-1 text-sm">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-green-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 shadow-md rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 3 && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-3 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We typically reply within minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
}
