
import React, { useEffect } from 'react';

const ChatBubble = () => {
  useEffect(() => {
    // Add the style element
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .ktt10-btn {
        width: 70px !important;
        height: 70px !important;
        background: linear-gradient(45deg, #f20707, #4b5d5a) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
        cursor: pointer !important; /* Ensure cursor shows it's clickable */
      }

      .ktt10-btn img {
        width: 60% !important;
        height: 60% !important;
        object-fit: cover !important;
        transform: translate(0px, 0px) !important;
      }

      #custom-popup {
        position: fixed;
        display: none;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 6px;
        background: #ffffff;
        border: 1px solid #e9ecef;
        color: #1c1c1e;
        bottom: 110px;
        right: 20px;
        font-size: 16px;
        font-family: Arial;
        font-weight: normal;
        font-style: normal;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        z-index: 9999;
        min-width: 200px;
        max-width: 300px;
      }
      #custom-popup-text {
        cursor: pointer;
        flex-grow: 1;
      }
      #custom-popup-close {
        background: none;
        border: none;
        font-size: 20px;
        color: #8e8e93;
        cursor: pointer;
        padding: 0;
        line-height: 1;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Create the custom popup element
    const popupDiv = document.createElement('div');
    popupDiv.id = 'custom-popup';
    popupDiv.innerHTML = `
      <span id="custom-popup-text" style="font-family: Arial; font-weight: normal; font-style: normal;">Click Here for a Discount 💸</span>
      <button id="custom-popup-close">&times;</button>
    `;
    document.body.appendChild(popupDiv);
    
    // Make sure to remove any existing script tags to avoid duplicates
    const existingScripts = document.querySelectorAll('script[src*="chatgptbuilder.io"]');
    existingScripts.forEach(script => script.remove());
    
    // Add the script tag to initialize the chat widget
    const scriptPlugin = document.createElement('script');
    scriptPlugin.src = "https://app.chatgptbuilder.io/webchat/plugin.js?v=5";
    scriptPlugin.async = true;
    document.body.appendChild(scriptPlugin);
    
    // Create script for initialization and popup behavior
    scriptPlugin.onload = () => {
      console.log('Chat widget plugin loaded successfully');
      
      // Give a small delay to ensure the ktt10 object is available
      setTimeout(() => {
        if (typeof window.ktt10 !== 'undefined') {
          console.log('ktt10 object found, setting up chat widget');
          
          const scriptSetup = document.createElement('script');
          scriptSetup.innerHTML = `
            window.ktt10.setup({
              accountId: "1305446",
              id: "i8d4NQH0wEeP1Z",
              color: "#f20707",
              icon: "https://i.ibb.co/pPksxnb/default-chat-icom.png",
              type: "floating"
            });
            
            const popup = document.getElementById('custom-popup');
            const popupTextEl = document.getElementById('custom-popup-text');
            const closePopupBtn = document.getElementById('custom-popup-close');
            
            function showPopup() {
              if (popup) popup.style.display = 'flex';
            }
            
            function hidePopup() {
              if (popup) popup.style.display = 'none';
            }
            
            function initializeTimers() {
              // Show popup immediately
              showPopup();
              
              console.log('Initializing popup and chat button');
              
              // Debug - check if button exists
              const ktt10Btn = document.querySelector('.ktt10-btn');
              console.log('ktt10 button found:', !!ktt10Btn);
              
              if (ktt10Btn) {
                // Add direct click event listener to the button for debugging
                ktt10Btn.addEventListener('click', function() {
                  console.log('Direct click on ktt10 button');
                  if (typeof window.ktt10.open === 'function') {
                    window.ktt10.open();
                  }
                });
              }
            }
            
            if (popupTextEl) {
              popupTextEl.addEventListener('click', () => {
                console.log('Popup clicked, trying to open chat');
                const ktt10Btn = document.querySelector('.ktt10-btn');
                if (ktt10Btn) {
                  console.log('Found ktt10 button, clicking it');
                  ktt10Btn.click();
                } else if (typeof window.ktt10.open === 'function') {
                  console.log('Using ktt10.open() directly');
                  window.ktt10.open();
                }
                hidePopup();
              });
            }
            
            if (closePopupBtn) {
              closePopupBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                hidePopup();
              });
            }
            
            // Run initialization when document is ready
            if (document.readyState === 'complete') {
              initializeTimers();
            } else {
              window.addEventListener('load', initializeTimers);
            }
          `;
          document.body.appendChild(scriptSetup);
          console.log('Chat widget setup script added');
          
          // Add a manual button as fallback
          const manualButton = document.createElement('button');
          manualButton.textContent = 'Open Chat';
          manualButton.style.position = 'fixed';
          manualButton.style.bottom = '20px';
          manualButton.style.left = '20px';
          manualButton.style.zIndex = '9999';
          manualButton.style.display = 'none'; // Hidden by default
          manualButton.onclick = () => {
            console.log('Manual button clicked');
            if (typeof window.ktt10?.open === 'function') {
              window.ktt10.open();
            }
          };
          document.body.appendChild(manualButton);
        } else {
          console.error('Chat widget ktt10 object not available after script load');
        }
      }, 1000); // 1 second delay to ensure everything is loaded properly
    };
    
    // Cleanup function to remove elements when component unmounts
    return () => {
      // We don't remove the elements since they need to persist
    };
  }, []);

  // Return an empty div since all the UI is created via DOM manipulation
  return null;
};

export default ChatBubble;
