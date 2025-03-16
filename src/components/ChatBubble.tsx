
import React, { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const ChatBubble = () => {
  useEffect(() => {
    // Add the script tags to initialize the chat widget
    const scriptPlugin = document.createElement('script');
    scriptPlugin.src = "https://app.chatgptbuilder.io/webchat/plugin.js?v=6";
    scriptPlugin.async = true;
    
    const scriptSetup = document.createElement('script');
    scriptSetup.text = `ktt10.setup({id:"i8d4NQH0wEeP1Z",accountId:"1305446",color:"#36D6B5"})`;
    
    // Add scripts to the document
    document.body.appendChild(scriptPlugin);
    scriptPlugin.onload = () => {
      document.body.appendChild(scriptSetup);
    };
    
    // Cleanup function to remove the scripts when component unmounts
    return () => {
      // We don't remove the scripts since they need to persist for the chat widget
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => {
          // The external script should handle opening the chat
          if (window.ktt10 && typeof window.ktt10.open === 'function') {
            window.ktt10.open();
          }
        }}
        className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatBubble;
