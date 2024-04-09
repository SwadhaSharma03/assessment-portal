import React from 'react';

function Assessments() {
  // Assuming this data structure for assessments
  const assessments = [
    { id: 1, name: 'Assessment 1' },
    { id: 2, name: 'Assessment 2' },
    { id: 3, name: 'Assessment 3' }
  ];

  return (
    <div>
      <h2>Assessments</h2>
      <ul>
        {assessments.map(assessment => (
          <li key={assessment.id}>{assessment.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Assessments;
