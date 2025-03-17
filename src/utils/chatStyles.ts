/**
 * Utility function to add chat widget styles to the document head
 */
export const addChatStyles = (): void => {
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
