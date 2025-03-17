
import React, { useEffect, useRef } from 'react';

const ChatBubble = () => {
  const initialized = useRef(false);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    console.log('ChatBubble component mounted');
    
    // Clean up any existing elements to avoid conflicts
    const cleanupExisting = () => {
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
    
    cleanupExisting();
    
    // Add styles once
    const addStyles = () => {
      const existingStyles = document.querySelector('style[data-chat-styles]');
      if (existingStyles) return;
      
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-chat-styles', 'true');
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
    };
    
    // Add popup element
    const addPopupElement = () => {
      if (document.getElementById('custom-popup')) return;
      
      const popupDiv = document.createElement('div');
      popupDiv.id = 'custom-popup';
      popupDiv.innerHTML = `
        <span id="custom-popup-text">Click Here for a Discount 💸</span>
        <button id="custom-popup-close">&times;</button>
      `;
      document.body.appendChild(popupDiv);
    };
    
    // Function to load script and set up chat
    const loadChatScript = () => {
      if (scriptLoaded.current) return;
      scriptLoaded.current = true;
      
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
              
              // Set up popup behavior directly
              setupPopupBehavior();
            } catch (err) {
              console.error('Error setting up ktt10:', err);
            }
          }
        }, 500);
      };
      
      scriptTag.onerror = (err) => {
        console.error('Failed to load chat plugin script:', err);
        scriptLoaded.current = false; // Allow retry
      };
      
      document.body.appendChild(scriptTag);
    };
    
    // Function to set up popup behavior
    const setupPopupBehavior = () => {
      const popup = document.getElementById('custom-popup');
      const popupTextEl = document.getElementById('custom-popup-text');
      const closePopupBtn = document.getElementById('custom-popup-close');
      
      if (!popup || !popupTextEl || !closePopupBtn) {
        console.error('Popup elements not found');
        return;
      }
      
      // Show popup
      const showPopup = () => {
        popup.style.display = 'flex';
        console.log('Showing popup');
      };
      
      // Hide popup
      const hidePopup = () => {
        popup.style.display = 'none';
        console.log('Hiding popup');
      };
      
      // Helper to find and click chat button
      const findAndClickChatButton = () => {
        const ktt10Btn = document.querySelector('.ktt10-btn');
        
        if (ktt10Btn) {
          console.log('Chat button found, clicking');
          ktt10Btn.dispatchEvent(new Event('click'));
          return true;
        }
        
        console.log('Chat button not found');
        return false;
      };
      
      // Setup popup text click handler
      popupTextEl.addEventListener('click', () => {
        console.log('Popup text clicked');
        
        // Try to find and click the button
        const buttonFound = findAndClickChatButton();
        
        if (!buttonFound) {
          console.log('Button not found, trying direct ktt10.open()');
          // Try direct API if button not found
          if (typeof window.ktt10?.open === 'function') {
            window.ktt10.open();
          }
        }
        
        hidePopup();
      });
      
      // Setup close button
      closePopupBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hidePopup();
      });
      
      // Show popup after a slight delay
      setTimeout(showPopup, 1500);
    };
    
    // Execute initialization sequence in order
    addStyles();
    addPopupElement();
    loadChatScript();
    
    return () => {
      console.log('ChatBubble component unmounting');
      // We don't remove elements since they need to persist
    };
  }, []); // Empty dependency array - only run once

  return null;
};

export default ChatBubble;
