import React, { useState } from 'react';
import './styles/AddImprovementDialog.css';
import './Improvements';

const AddImprovementDialog = ({ index, addImprovement, resources, closeDialog }) => {
  const [type, setType] = useState('house');


  const handleAdd = () => {
    // TODO: Calculate cost and check resources
    addImprovement({ index, type, level: 1 });
    closeDialog();
  };

  return (
    <div className="add-improvement-dialog">
      <label>
        Select Improvement:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="house">House</option>
          <option value="field">Field</option>
          <option value="pasture">Pasture</option>
          <option value="lumberMill">Lumber Mill</option>
          <option value="well">Well</option>
        </select>
      </label>
      <button onClick={handleAdd}>Add</button>
      <button onClick={closeDialog}>Cancel</button>
    </div>
  );
};

export default AddImprovementDialog;