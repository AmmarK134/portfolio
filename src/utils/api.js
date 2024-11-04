// src/utils/api.js

export const fetchAssistantResponse = async (message) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',  // or 'gpt-3.5-turbo' if you don't have access to gpt-4
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;  // Extract the assistant's response
  } catch (error) {
    console.error("Error fetching assistant response:", error);
    return "Error fetching response from assistant.";
  }
};
