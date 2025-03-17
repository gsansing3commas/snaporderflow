
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
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 9999;
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
      <span id="custom-popup-text">Click Here for a Discount 💸</span>
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
          
          const initScript = document.createElement('script');
          initScript.innerHTML = `
            (function() {
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
                popup.style.display = 'flex';
              }

              function hidePopup() {
                popup.style.display = 'none';
              }

              function waitForChatButton(callback) {
                const observer = new MutationObserver(() => {
                  const ktt10Btn = document.querySelector('.ktt10-btn');
                  if (ktt10Btn) {
                    observer.disconnect();
                    callback(ktt10Btn);
                  }
                });

                observer.observe(document.body, { childList: true, subtree: true });
                
                // Also check if the button already exists
                const existingBtn = document.querySelector('.ktt10-btn');
                if (existingBtn) {
                  callback(existingBtn);
                }
              }

              popupTextEl.addEventListener('click', () => {
                console.log('Popup clicked, waiting for chat button');
                waitForChatButton((ktt10Btn) => {
                  console.log('Chat button found, clicking it');
                  ktt10Btn.click();
                });
                hidePopup();
              });

              closePopupBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                hidePopup();
              });

              // Show popup on load
              window.addEventListener('load', () => {
                console.log('Window loaded, showing popup');
                showPopup();
              });
              
              // Also show popup immediately if page is already loaded
              if (document.readyState === 'complete') {
                console.log('Document already complete, showing popup immediately');
                showPopup();
              }
            })();
          `;
          document.body.appendChild(initScript);
          console.log('Chat widget initialization script added');
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
