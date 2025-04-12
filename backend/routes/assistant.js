const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize OpenAI with configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Create a new assistant (run this once and save the assistant ID)
router.post('/create-assistant', async (req, res) => {
  try {
    const assistant = await openai.beta.assistants.create({
      name: "Portfolio Assistant",
      instructions: "You are a helpful assistant that answers questions about Ammar's portfolio and experience.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-turbo-preview"
    });
    res.json({ assistant });
  } catch (error) {
    console.error('Error creating assistant:', error);
    res.status(500).json({ error: error.message });
  }
});

// Create a new thread
router.post('/create-thread', async (req, res) => {
  try {
    console.log('Creating new thread...');
    const thread = await openai.beta.threads.create();
    console.log('Thread created:', thread.id);
    res.json({ threadId: thread.id });
  } catch (error) {
    console.error('Error creating thread:', error);
    res.status(500).json({ error: error.message });
  }
});

// Send a message and get a response
router.post('/chat', async (req, res) => {
  try {
    const { threadId, message } = req.body;
    const assistantId = process.env.OPENAI_ASSISTANT_ID;

    console.log('Processing chat request:', { threadId, message, assistantId });

    // Add a Message to the Thread
    const threadMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message
    });

    console.log('Message added to thread:', threadMessage.id);

    // Run the Assistant
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId
    });

    console.log('Run created:', run.id);

    // Check the Run status and wait for completion
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    console.log('Initial run status:', runStatus.status);
    
    while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      console.log('Updated run status:', runStatus.status);
    }

    if (runStatus.status === 'completed') {
      // Get the messages
      const messages = await openai.beta.threads.messages.list(threadId);
      const lastMessage = messages.data[0];
      
      if (!lastMessage || !lastMessage.content || !lastMessage.content[0]) {
        throw new Error('No response received from assistant');
      }
      
      console.log('Assistant response:', lastMessage.content[0].text.value);
      res.json({ response: lastMessage.content[0].text.value });
    } else {
      throw new Error(`Run ended with status: ${runStatus.status}`);
    }
  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 