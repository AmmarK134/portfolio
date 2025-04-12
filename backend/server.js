const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const assistantRoutes = require('./routes/assistant');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/assistant', assistantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 