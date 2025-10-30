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
  const shouldAutoScroll = useRef(true);

  useEffect(() => {
    if (!chatInitialized.current) {
      initializeChat().catch(err => {
        console.error('Failed to initialize chat:', err);
        setError('Failed to initialize chat. Please try refreshing the page.');
      });
      chatInitialized.current = true;
    }
  }, []);

  const scrollToBottom = () => {
    if (shouldAutoScroll.current && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 10;
    shouldAutoScroll.current = isAtBottom;
  };

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
      shouldAutoScroll.current = true;
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.message || 'Failed to get response from assistant. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default scroll behavior
      handleSend();
    }
  };

  return (
    <section className="chat-section">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat with Portfolio Assistant</h2>
        </div>
      
      <div className="messages" onScroll={handleScroll}>
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
          onKeyPress={handleKeyPress}
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
    </section>
  );
};

export default Chat;
