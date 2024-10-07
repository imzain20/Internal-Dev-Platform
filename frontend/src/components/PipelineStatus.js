import React, { useState, useEffect } from 'react';

const PipelineStatus = () => {
  const [pipelines, setPipelines] = useState([]);

  useEffect(() => {
    // Fetch pipeline data (for now, we'll use mock data)
    const mockData = [
      { id: 1, name: 'Build and Test', status: 'Success' },
      { id: 2, name: 'Deploy to Production', status: 'Failed' },
    ];
    setPipelines(mockData);
  }, []);

  return (
    <div>
      <h2>CI/CD Pipelines</h2>
      <ul>
        {pipelines.map(pipeline => (
          <li key={pipeline.id}>
            {pipeline.name}: {pipeline.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PipelineStatus;
