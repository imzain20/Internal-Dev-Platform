import React, { useState, useEffect } from 'react';

const PipelineStatus = () => {
  const [pipelines, setPipelines] = useState([]);

  useEffect(() => {
    // Fetch pipeline data (using mock data for now)
    const mockData = [
      { id: 1, name: 'Build', status: 'Success', duration: '5 mins', lastUpdated: '2024-10-09 10:30 AM' },
      { id: 2, name: 'Deploy to Production', status: 'Failed', duration: '2 mins', lastUpdated: '2024-10-09 10:35 AM' },
    ];
    setPipelines(mockData);
  }, []);

  return (
    <div>
      <ul>
        {pipelines.map(pipeline => (
          <li key={pipeline.id}>
            <div>
              <strong>{pipeline.name}</strong>
              <span style={{ marginLeft: '10px', fontStyle: 'italic' }}>({pipeline.status})</span>
            </div>
            <div>
              Duration: <span>{pipeline.duration}</span> | Last Updated: <span>{pipeline.lastUpdated}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PipelineStatus;
