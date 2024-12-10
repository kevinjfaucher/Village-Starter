import React from 'react';
import './styles/EditImprovementDialog.css';


const EditImprovementDialog = ({ improvement, updateResources, closeDialog }) => {
  
  
  const handleUpgrade = () => {
    // TODO: Handle upgrade logic
  };

  const handleDowngrade = () => {
    // TODO: Handle downgrade logic
  };

  const handleRemove = () => {
    // TODO: Handle remove logic
  };

 

  return (
    <div className="edit-improvement-dialog">
      <h3>{improvement.type}</h3>
      <button onClick={handleUpgrade}>Upgrade</button>
      <button onClick={handleDowngrade}>Downgrade</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={closeDialog}>Close</button>
    </div>
  );
};

export default EditImprovementDialog;
