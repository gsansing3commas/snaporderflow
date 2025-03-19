
/**
 * Creates and adds the popup element to the document body
 */
export const addPopupElement = (): void => {
  if (document.getElementById('custom-popup')) return;
  
  const popupDiv = document.createElement('div');
  popupDiv.id = 'custom-popup';
  popupDiv.innerHTML = `
    <div>
      <span id="custom-popup-text" style="font-family: Arial; font-weight: normal; font-style: normal;">Hi, I'm Rene your virtual server. What can I get started for you?</span>
      <div class="disclaimer-text">Information gathered in this chat will be used to confirm your order and send you a payment link.</div>
    </div>
    <button id="custom-popup-close">&times;</button>
  `;
  document.body.appendChild(popupDiv);
};

/**
 * Sets up the popup behavior with event listeners
 */
export const setupPopupBehavior = (): void => {
  const popup = document.getElementById('custom-popup');
  const popupTextEl = document.getElementById('custom-popup-text');
  const closePopupBtn = document.getElementById('custom-popup-close');
  let chatTimer: number | null = null;
  let popupTimer: number | null = null;
  
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
  
  // Initialize timers for automated behavior
  const initializeTimers = () => {
    if (chatTimer) clearTimeout(chatTimer);
    if (popupTimer) clearTimeout(popupTimer);

    // Show popup immediately (0 second delay)
    showPopup();

    const ktt10Btn = document.querySelector('.ktt10-btn');
    // No auto-click functionality as delay is set to 0
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
  
  // Initialize timers
  initializeTimers();
};
