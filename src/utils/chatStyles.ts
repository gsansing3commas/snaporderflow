
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
    
    /* Additional Chat Widget Styles */
    :root {
      --primaryColor: #36d6b5;
      --secondaryColor: #ffffff;
      --fontFamily: Helvetica, Arial, sans-serif;
      --fontWeight: bold;
      --headerTextSize: 18px;
      --headerTextColor: #ffffff;
      --headerBackgroundLayers: #d63848;
      --headerHeight: 60px;
      --headerTextAlign: center;
      --cornerStyle: 20px;
      --headerPaddingLeft: 20px;
      --chatAreaBackgroundColor: #eff2f5;
      --chatAreaGradient: none;
      --chatAreaBackgroundImage: none;
      --chatAreaBackgroundPosition: center;
      --chatAreaBackgroundRepeat: no-repeat;
      --chatAreaBackgroundSize: cover;
      --messageTextSize: 14px;
      --userMessageCornerStyle: 20px;
      --botMessageCornerStyle: 20px;
      --botMessageTextColor: #212529;
      --botMessageBg: #eeeeee;
      --userMessageTextColor: #ffffff;
      --userMessageBg: #d63850;
      --chatInputBackground: #ffffff;
      --chatInputTextFieldBg: #f1f1f1;
      --chatInputTextFieldTextColor: #333333;
      --chatInputBorderRadius: 18px;
      --iconsDisplay: inline-block;
      --iconsColor: #000000;
      --iconsColorSend: #000000;
      --buttonTextSize: 14px;
      --buttonFontWeight: bold;
      --buttonPadding: 10px 20px;
      --chatInputHeight: 80px;
      --avatarSize: 50px;
      --avatarBorderColor: transparent;
      --avatarBorderThickness: 3px;
      --avatarImageURL: none;
      --avatarDisplay: inline-block;
      --avatarShape: 50%;
      --otherMessagePaddingLeft: calc(50px + 10px);
      --userMessageBorderColor: #ffffff;
      --userMessageBorderThickness: 3px;
      --botMessageBorderColor: #ffffff;
      --botMessageBorderThickness: 3px;
    }
    
    pre {
      color: var(--botMessageTextColor);
      line-height: 1.5;
      padding: 10px;
      font-weight: var(--buttonFontWeight);
      font-size: var(--messageTextSize);
      font-family: var(--fontFamily);
    }
    
    .chat-header {
      font-size: var(--headerTextSize);
      color: var(--headerTextColor);
      background: var(--headerBackgroundLayers);
      height: var(--headerHeight);
      text-align: var(--headerTextAlign);
      display: flex;
      align-items: center;
      justify-content: var(--headerTextAlign);
      font-family: var(--fontFamily);
      border-top-left-radius: var(--cornerStyle);
      border-top-right-radius: var(--cornerStyle);
      padding-left: var(--headerPaddingLeft);
    }
    
    .chat-input path {
      fill: var(--iconsColor)!important;
    }
    
    .chat-area {
      height: calc(92% - var(--headerHeight));
      position: absolute;
      top: var(--headerHeight);
      flex: 1;
      padding: 0;
      overflow-y: auto;
      line-height: 1.5;
      font-family: var(--fontFamily);
      background-color: var(--chatAreaBackgroundColor);
      background-image: var(--chatAreaGradient),var(--chatAreaBackgroundImage);
      background-position: var(--chatAreaBackgroundPosition);
      background-repeat: var(--chatAreaBackgroundRepeat);
      background-size: var(--chatAreaBackgroundSize);
    }
    
    .other-message {
      position: relative;
      margin-bottom: 10px;
      padding-left: var(--otherMessagePaddingLeft);
    }
    
    .other-message:before {
      content: "";
      display: var(--avatarDisplay);
      position: absolute;
      top: 0;
      left: 0;
      width: var(--avatarSize);
      height: var(--avatarSize);
      background-image: var(--avatarImageURL);
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: var(--avatarShape);
      border: var(--avatarBorderThickness) solid var(--avatarBorderColor);
    }
    
    .other-message .message-text {
      background-color: var(--botMessageBg);
      color: var(--botMessageTextColor);
      font-size: var(--messageTextSize);
      border-radius: var(--botMessageCornerStyle);
      word-wrap: break-word;
      font-family: var(--fontFamily);
      margin-bottom: 5px;
      padding: 10px 15px;
      border: var(--botMessageBorderThickness) solid var(--botMessageBorderColor);
    }
    
    .other-message .message-text * {
      color: var(--botMessageTextColor);
    }
    
    .my-message {
      padding-right: 0;
      margin-bottom: 10px;
      position: relative;
    }
    
    .my-message .message-text {
      background-color: var(--userMessageBg)!important;
      color: var(--userMessageTextColor);
      font-size: var(--messageTextSize);
      border-radius: var(--userMessageCornerStyle);
      word-wrap: break-word;
      font-family: var(--fontFamily);
      margin-bottom: 5px;
      margin-top: 5vh;
      padding: 10px 15px;
      border: var(--userMessageBorderThickness) solid var(--userMessageBorderColor);
    }
    
    .my-message .message-text * {
      color: var(--userMessageTextColor)!important;
    }
    
    .message-text * {
      font-family: inherit;
    }
    
    .chat-input {
      height: var(--chatInputHeight);
      padding: 20px;
      background: var(--chatInputBackground);
      display: flex;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      border-top: 0 solid #e0e0e0;
      font-family: var(--fontFamily);
    }
    
    .chat-input .input-group {
      flex: 1;
      border-radius: var(--chatInputBorderRadius)!important;
      background-color: var(--chatInputTextFieldBg)!important;
      overflow: visible;
      position: relative;
      display: flex;
      padding: 5px;
    }
    
    .chat-input input {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: var(--chatInputTextFieldBg);
      color: var(--chatInputTextFieldTextColor);
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
      flex: 1;
    }
    
    .chat-input .form-control {
      background: var(--chatInputTextFieldBg)!important;
    }
    
    button.btn.uploadBtt.bg-light-hover:hover {
      background: #ffffff42;
      filter: invert(0.7);
    }
    
    path#path2 {
      fill: var(--iconsColorSend)!important;
    }
    
    .bg-light-hover:hover {
      background-color: unset!important;
    }
    
    .btn-outline-primary {
      color: var(--botMessageTextColor)!important;
      border-color: var(--primaryColor)!important;
      background-color: var(--botMessageBg);
    }
    
    .chat-ice-breaker .btn {
      position: relative;
      top: -20px!important;
      color: #000000;
      background-color: var(--botMessageBg);
      font-family: var(--fontFamily);
      font-size: var(--buttonTextSize);
      font-weight: var(--buttonFontWeight);
      padding: var(--buttonPadding);
      border-radius: 20px;
      border: 1px solid var(--primaryColor);
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,.1);
      margin: 5px 0;
      transition: transform 0.2s ease,background-color 0.2s ease;
    }
    
    .chat-ice-breaker .btn:hover {
      background-color: var(--primaryColor);
      color: #fff;
      transform: scale(1.05);
    }
    
    .chat-input .btn.dropdown-toggle {
      position: relative;
      color: var(--botMessageTextColor);
      font-family: var(--fontFamily);
      font-size: 16px;
      z-index: 10000;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    
    .chat-input .dropdown-menu {
      position: absolute;
      top: calc(100% - 10px);
      left: 0;
      background-color: var(--botMessageBg);
      color: var(--botMessageTextColor);
      font-size: 16px;
      z-index: 10000;
      pointer-events: auto;
      min-width: 160px;
      border: 0px solid var(--primaryColor);
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0,0,0,.1);
      font-family: var(--fontFamily);
    }
    
    .chat-input .dropdown-menu .dropdown-item {
      background-color: var(--botMessageBg);
      color: var(--botMessageTextColor);
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
      border-radius: 3px;
      font-family: var(--fontFamily);
    }
    
    .chat-input .dropdown-menu .dropdown-item:hover {
      background-color: var(--primaryColor);
      color: #fff;
    }
  `;
  document.head.appendChild(styleElement);
};
