import React, { useState, useEffect, useRef } from 'react';
import { fetchAssistantResponse, initializeChat } from '../../utils/api';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const chatInitialized = useRef(false);

  useEffect(() => {
    // Initialize chat when component mounts, but don't scroll
    if (!chatInitialized.current) {
      initializeChat().catch(err => {
        console.error('Failed to initialize chat:', err);
        setError('Failed to initialize chat. Please try refreshing the page.');
      });
      chatInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    // Only scroll to bottom when messages change and there are messages
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const assistantReply = await fetchAssistantResponse(input);
      setMessages(prev => [...prev, { sender: 'assistant', text: assistantReply }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.message || 'Failed to get response from assistant. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with Portfolio Assistant</h2>
      </div>
      
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="message-content loading">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        {error && (
          <div className="message error">
            <div className="message-content">
              {error}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Ammar's portfolio..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chat;
