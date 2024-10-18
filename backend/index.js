const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const pipelineRoutes = require('./routes/pipelines');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route setup
app.use('/api/auth', authRoutes);
app.use('/api/pipelines', pipelineRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
