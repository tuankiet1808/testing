import React from 'react';
import './FloatingChatButtons.css';
import { FaFacebookMessenger } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const FloatingChatButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://m.me/arenabillard" // Messenger page link
        className="chat-button messenger"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookMessenger />
      </a>
      <a
        href="https://zalo.me/0981838884" // Zalo link
        className="chat-button zalo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiZalo />
      </a>
    </div>
  );
};

export default FloatingChatButtons;
