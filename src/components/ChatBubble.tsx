
import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized && (
        <div className="mb-4 max-w-[280px] transform transition-all duration-500 animate-fade-up">
          <div className="relative bg-[#FDE1D3] text-gray-800 p-4 rounded-t-2xl rounded-bl-2xl shadow-lg">
            <button 
              onClick={() => setIsMinimized(true)}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <p className="text-sm font-medium">Hi! I'm your virtual server 👋</p>
            <p className="text-xs mt-1 text-gray-600">What can I get started for you?</p>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#FDE1D3] transform rotate-45"></div>
          </div>
        </div>
      )}
      
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[350px] h-[500px] bg-white rounded-lg shadow-2xl transform transition-all duration-500 animate-fade-up">
          <div className="absolute -top-2 -right-2 z-10">
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <iframe
            src="https://app.chatgptbuilder.io/bots/1305446/l/1725999210020"
            className="w-full h-full rounded-lg"
            frameBorder="0"
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatBubble;
