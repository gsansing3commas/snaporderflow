
import React, { useEffect } from 'react';

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

  // Return null as we don't want to render any UI elements
  return null;
};

export default ChatBubble;
