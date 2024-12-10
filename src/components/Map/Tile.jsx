import React, { useState } from 'react';
import AddImprovementDialog from './AddImprovementDialog';
import EditImprovementDialog from './EditImprovementDialog';
import './styles/Tile.css';

const Tile = ({ index, improvement, addImprovement, updateResources, resources }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="tile" onClick={() => setDialogOpen(true)}>
      {improvement ? (
        <EditImprovementDialog
          improvement={improvement}
          updateResources={updateResources}
          resources={resources}
          closeDialog={() => setDialogOpen(false)}
        />
      ) : (
        isDialogOpen && (
          <AddImprovementDialog
            index={index}
            addImprovement={addImprovement}
            resources={resources}
            closeDialog={() => setDialogOpen(false)}
          />
        )
      )}
    </div>
  );
};

export default Tile;