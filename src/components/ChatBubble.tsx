
import React, { useEffect, useRef } from 'react';
import { addChatStyles } from '../utils/chatStyles';
import { addPopupElement, setupPopupBehavior } from '../utils/chatPopup';
import { cleanupExistingChatElements, loadChatScript } from '../utils/chatScript';

const ChatBubble = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    console.log('ChatBubble component mounted');
    
    // Initialize chat widget
    const initializeChat = () => {
      // Step 1: Clean up any existing elements
      cleanupExistingChatElements();
      
      // Step 2: Add styles
      addChatStyles();
      
      // Step 3: Add popup element
      addPopupElement();
      
      // Step 4: Load chat script and set up popup behavior on success
      loadChatScript(() => {
        setupPopupBehavior();
      });
    };
    
    // Initialize immediately
    initializeChat();
    
    return () => {
      console.log('ChatBubble component unmounting');
      // We don't remove elements since they need to persist
    };
  }, []); // Empty dependency array - only run once

  return null;
};

export default ChatBubble;
