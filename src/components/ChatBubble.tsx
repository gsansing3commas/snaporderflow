
import React, { useEffect, useRef } from 'react';

const ChatBubble = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    console.log('ChatBubble component mounted');
    
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
        cursor: pointer !important;
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
    
    // Create popup div if it doesn't exist
    if (!document.getElementById('custom-popup')) {
      const popupDiv = document.createElement('div');
      popupDiv.id = 'custom-popup';
      popupDiv.innerHTML = `
        <span id="custom-popup-text">Click Here for a Discount 💸</span>
        <button id="custom-popup-close">&times;</button>
      `;
      document.body.appendChild(popupDiv);
    }
    
    // Remove any existing script tags to avoid conflicts
    document.querySelectorAll('script[src*="chatgptbuilder.io"]').forEach(script => {
      script.remove();
    });
    
    // Create and add the main script
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://app.chatgptbuilder.io/webchat/plugin.js?v=5';
    scriptTag.onload = () => {
      console.log('Chat plugin script loaded');
      
      // Wait a moment to ensure ktt10 is available globally
      setTimeout(() => {
        // Check if ktt10 is defined in the window object
        if (typeof window.ktt10 !== 'undefined') {
          console.log('ktt10 object is available, setting up chat');
          
          // Set up ktt10
          window.ktt10.setup({
            accountId: "1305446",
            id: "i8d4NQH0wEeP1Z",
            color: "#f20707",
            icon: "https://i.ibb.co/pPksxnb/default-chat-icom.png",
            type: "floating"
          });
          
          // Set up popup behavior
          const setupPopupBehavior = () => {
            const popup = document.getElementById('custom-popup');
            const popupTextEl = document.getElementById('custom-popup-text');
            const closePopupBtn = document.getElementById('custom-popup-close');
            
            if (!popup || !popupTextEl || !closePopupBtn) {
              console.error('Popup elements not found');
              return;
            }
            
            // Function to show popup
            const showPopup = () => {
              popup.style.display = 'flex';
              console.log('Showing popup');
            };
            
            // Function to hide popup
            const hidePopup = () => {
              popup.style.display = 'none';
              console.log('Hiding popup');
            };
            
            // Wait for chat button to appear and click it
            const waitForChatButton = (callback) => {
              console.log('Waiting for chat button to appear');
              
              // Check if button already exists
              const existingBtn = document.querySelector('.ktt10-btn');
              if (existingBtn) {
                console.log('Chat button already exists, executing callback');
                callback(existingBtn);
                return;
              }
              
              // Set up observer to wait for button
              const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                  if (mutation.addedNodes.length) {
                    const ktt10Btn = document.querySelector('.ktt10-btn');
                    if (ktt10Btn) {
                      console.log('Chat button found via observer');
                      observer.disconnect();
                      callback(ktt10Btn);
                      return;
                    }
                  }
                }
              });
              
              observer.observe(document.body, { childList: true, subtree: true });
            };
            
            // Set up popup text click to open chat
            popupTextEl.addEventListener('click', () => {
              console.log('Popup text clicked');
              waitForChatButton((btn) => {
                console.log('Clicking chat button');
                btn.click();
              });
              hidePopup();
            });
            
            // Set up close button
            closePopupBtn.addEventListener('click', (e) => {
              console.log('Close button clicked');
              e.stopPropagation();
              hidePopup();
            });
            
            // Show popup on load or immediately if already loaded
            if (document.readyState === 'complete') {
              console.log('Document already loaded, showing popup immediately');
              showPopup();
            } else {
              console.log('Setting up load event for popup');
              window.addEventListener('load', showPopup);
            }
          };
          
          // Call setup with a delay to ensure DOM is ready
          setTimeout(setupPopupBehavior, 1000);
          
          // Create a direct button to open chat in case the standard method fails
          const createDirectButton = () => {
            setTimeout(() => {
              // If chat button doesn't exist after 5 seconds, create a fallback
              if (!document.querySelector('.ktt10-btn')) {
                console.log('Creating direct access button since chat button not found');
                
                const directBtn = document.createElement('button');
                directBtn.textContent = 'Open Chat';
                directBtn.style.cssText = `
                  position: fixed;
                  bottom: 20px;
                  right: 100px;
                  z-index: 10000;
                  padding: 10px;
                  background: #f20707;
                  color: white;
                  border: none;
                  border-radius: 5px;
                  cursor: pointer;
                `;
                directBtn.onclick = () => {
                  console.log('Direct button clicked');
                  if (typeof window.ktt10 !== 'undefined' && typeof window.ktt10.open === 'function') {
                    window.ktt10.open();
                  } else {
                    console.error('ktt10.open is not available');
                  }
                };
                document.body.appendChild(directBtn);
              }
            }, 5000);
          };
          
          // Create direct button if needed
          createDirectButton();
        } else {
          console.error('ktt10 object not available after script load');
        }
      }, 1500); // Longer delay to ensure ktt10 is available
    };
    
    document.body.appendChild(scriptTag);
    
    return () => {
      console.log('ChatBubble component unmounting');
      // We don't remove elements since they need to persist
    };
  }, []); // Empty dependency array - only run once

  // Return null as we're creating elements directly in the DOM
  return null;
};

export default ChatBubble;
