import React, { useState, useEffect } from 'react';
import { fetchAssistantResponse } from '../../utils/api'; // Import the helper function

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) {
      console.log("No input provided.");
      return;
    }

    console.log("Sending message:", input);

    // Add user's message to the conversation
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      // Use the helper function to get assistant's response
      const assistantReply = await fetchAssistantResponse(input);
      const assistantMessage = { sender: 'assistant', text: assistantReply };

      // Add assistant's response to the conversation
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
