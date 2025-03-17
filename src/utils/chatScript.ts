
/**
 * Cleans up any existing chat-related elements to avoid conflicts
 */
export const cleanupExistingChatElements = (): void => {
  // Remove any existing scripts to avoid duplicate loading
  document.querySelectorAll('script[src*="chatgptbuilder.io"]').forEach(script => {
    script.remove();
  });
  
  // Remove any existing popup if present
  const existingPopup = document.getElementById('custom-popup');
  if (existingPopup) {
    existingPopup.remove();
  }
};

/**
 * Loads the chat script and initializes the chat widget
 * @param setupCallback - Function to call after successful setup
 */
export const loadChatScript = (setupCallback: () => void): void => {
  const scriptTag = document.createElement('script');
  scriptTag.src = 'https://app.chatgptbuilder.io/webchat/plugin.js?v=5';
  
  scriptTag.onload = () => {
    console.log('Chat plugin script loaded');
    
    // Wait for window.ktt10 to be available
    const checkKtt10 = setInterval(() => {
      if (typeof window.ktt10 !== 'undefined') {
        clearInterval(checkKtt10);
        console.log('ktt10 object available, initializing chat widget');
        
        // Initialize ktt10
        try {
          window.ktt10.setup({
            accountId: "1305446",
            id: "i8d4NQH0wEeP1Z",
            color: "#f20707",
            icon: "https://i.ibb.co/pPksxnb/default-chat-icom.png",
            type: "floating"
          });
          
          // Call the callback after setup
          setupCallback();
        } catch (err) {
          console.error('Error setting up ktt10:', err);
        }
      }
    }, 500);
  };
  
  scriptTag.onerror = (err) => {
    console.error('Failed to load chat plugin script:', err);
  };
  
  document.body.appendChild(scriptTag);
};
