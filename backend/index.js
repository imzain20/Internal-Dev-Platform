const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

app.get('/api/pipelines', (req, res) => {
  const pipelines = [
    { id: 1, name: 'Pipeline 1', status: 'Success', duration: '5m' },
    { id: 2, name: 'Pipeline 2', status: 'Failed', duration: '10m' },
    { id: 3, name: 'Pipeline 3', status: 'Running', duration: '2m' },
  ];
  res.json(pipelines);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
