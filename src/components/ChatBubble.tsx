
import React, { useEffect } from 'react';

const ChatBubble = () => {
  useEffect(() => {
    // Add the script tags to initialize the chat widget
    const scriptPlugin = document.createElement('script');
    scriptPlugin.src = "https://app.chatgptbuilder.io/webchat/plugin.js?v=6";
    scriptPlugin.async = true;
    
    // Create script for initialization
    const scriptSetup = document.createElement('script');
    scriptSetup.text = `
      window.addEventListener('load', function() {
        if (typeof window.ktt10 !== 'undefined') {
          window.ktt10.setup({
            id: "i8d4NQH0wEeP1Z",
            accountId: "1305446",
            color: "#EA1010"
          });
        } else {
          console.error('Chat widget ktt10 object not available');
        }
      });
    `;
    
    // Add scripts to the document
    document.body.appendChild(scriptPlugin);
    scriptPlugin.onload = () => {
      document.body.appendChild(scriptSetup);
      console.log('Chat widget scripts loaded');
    };
    
    // Cleanup function to remove elements when component unmounts
    return () => {
      // Note: We don't remove the scripts since they need to persist for the chat widget
    };
  }, []);

  // Add a button that manually opens the chat
  const openChat = () => {
    if (window.ktt10 && typeof window.ktt10.open === 'function') {
      window.ktt10.open();
      console.log('Attempting to open chat');
    } else {
      console.error('Chat widget open function not available');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={openChat}
        className="hidden" // Hidden button as fallback
        aria-label="Open chat"
      >
        Open Chat
      </button>
    </div>
  );
};

export default ChatBubble;
