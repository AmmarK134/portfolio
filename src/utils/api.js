// src/utils/api.js

let threadId = null;

export const initializeChat = async () => {
  try {
    const response = await fetch('/api/assistant/create-thread', {
      method: 'POST'
    });
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
        message,
        assistantId: 'proj_MnTFxY25DClaR7EgXF0rncFD' // Hardcode the assistant ID for now
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching assistant response:", error);
    return "Error fetching response from assistant.";
  }
};
