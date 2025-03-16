
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      window.open('https://app.chatgptbuilder.io/bots/1305446/l/1725999210020', '_blank');
    }
    setIsOpen(true);
  };

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
      <button
        onClick={handleClick}
        className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatBubble;
