const getPipelines = (req, res) => {
    const pipelines = [
      { id: 1, name: 'Pipeline 1', status: 'Success', duration: '5m' },
      { id: 2, name: 'Pipeline 2', status: 'Failed', duration: '10m' },
      { id: 3, name: 'Pipeline 3', status: 'Running', duration: '2m' },
    ];
    res.json(pipelines);
  };
  
  module.exports = { getPipelines };
  