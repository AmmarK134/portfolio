const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const assistantRoutes = require('./routes/assistant');

// Load environment variables
dotenv.config();

// Verify required environment variables
const requiredEnvVars = ['OPENAI_API_KEY', 'OPENAI_ASSISTANT_ID'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// Routes
app.use('/api/assistant', assistantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Environment variables loaded:');
  console.log('- OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '✓ Set' : '✗ Missing');
  console.log('- OPENAI_ASSISTANT_ID:', process.env.OPENAI_ASSISTANT_ID ? '✓ Set' : '✗ Missing');
}); 