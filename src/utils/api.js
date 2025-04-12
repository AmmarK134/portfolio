// src/utils/api.js

let threadId = null;

export const initializeChat = async () => {
  try {
    const response = await fetch('/api/assistant/create-thread', {
      method: 'POST'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    threadId = data.threadId;
    return threadId;
  } catch (error) {
    console.error('Error initializing chat:', error);
    throw error;
  }
};

export const fetchAssistantResponse = async (message) => {
  try {
    // If no thread exists, create one
    if (!threadId) {
      threadId = await initializeChat();
    }

    const response = await fetch('/api/assistant/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        threadId,
        message
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching assistant response:", error);
    throw error;
  }
};
