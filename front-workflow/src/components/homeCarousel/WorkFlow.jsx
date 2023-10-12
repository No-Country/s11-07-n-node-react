import React from 'react';
import FondoWorkflow from '../../assets/FondoWorkflow.png';
import Workflow from '../../assets/Workflow.png';

const WorkFlow = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${FondoWorkflow})`, backgroundSize: 'cover' }}>
        <img
          src={Workflow}
          alt="Workflow"
          className="absolute"
          style={{ width: '253px', height: '236px' }}
        />
      </div>
    );
  };
  
  export default WorkFlow;
  