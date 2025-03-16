
import React, { useEffect } from 'react';

const ChatBubble = () => {
  useEffect(() => {
    // Create and inject custom styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .ktt10-btn {
          width: 70px !important;
          height: 70px !important;
          background: linear-gradient(45deg, #f20713, #9a3737) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: hidden !important;
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
          font-size: 14px;
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

    // Create and inject custom popup
    const popupDiv = document.createElement('div');
    popupDiv.id = 'custom-popup';
    popupDiv.innerHTML = `
      <span id="custom-popup-text" style="font-family: Arial; font-weight: normal; font-style: normal;">I'm Rene your virtural server. What can I get started for you today? </span>
      <button id="custom-popup-close">&times;</button>
    `;
    document.body.appendChild(popupDiv);

    // Add the script tags to initialize the chat widget
    const scriptPlugin = document.createElement('script');
    scriptPlugin.src = "https://app.chatgptbuilder.io/webchat/plugin.js?v=5";
    scriptPlugin.async = true;
    
    // Create script for initialization and functionality
    const scriptSetup = document.createElement('script');
    scriptSetup.text = `
      (function() {
          ktt10.setup({
              accountId: "1305446",
              id: "1725999210020",
              color: "#f20713",
              icon: "https://i.ibb.co/pPksxnb/default-chat-icom.png",
              type: "floating"
          });

          const popup = document.getElementById('custom-popup');
          const popupTextEl = document.getElementById('custom-popup-text');
          const closePopupBtn = document.getElementById('custom-popup-close');
          let chatTimer = null;
          let popupTimer = null;

          function showPopup() {
              popup.style.display = 'flex';
          }

          function hidePopup() {
              popup.style.display = 'none';
          }

          function initializeTimers() {
              if (chatTimer) clearTimeout(chatTimer);
              if (popupTimer) clearTimeout(popupTimer);

              if (0 > 0) {
                  popupTimer = setTimeout(showPopup, 0 * 1000);
              } else {
                  showPopup();
              }

              const ktt10Btn = document.querySelector('.ktt10-btn');
              if (0 > 0 && ktt10Btn) {
                  chatTimer = setTimeout(() => {
                      ktt10Btn.click();
                      hidePopup();
                  }, 0 * 1000);
              }
          }

          popupTextEl.addEventListener('click', () => {
              const ktt10Btn = document.querySelector('.ktt10-btn');
              if (ktt10Btn) ktt10Btn.click();
              hidePopup();
          });

          closePopupBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              hidePopup();
          });

          if (document.readyState === 'complete') {
              initializeTimers();
          } else {
              window.addEventListener('load', initializeTimers);
          }
      })();
    `;
    
    // Add scripts to the document
    document.body.appendChild(scriptPlugin);
    scriptPlugin.onload = () => {
      document.body.appendChild(scriptSetup);
    };
    
    // Cleanup function to remove elements when component unmounts
    return () => {
      // Note: We don't remove the scripts and styles since they need to persist for the chat widget
      // If removal is needed in the future, this would be the place to do it
    };
  }, []);

  // Return null as we don't want to render any UI elements
  return null;
};

export default ChatBubble;
