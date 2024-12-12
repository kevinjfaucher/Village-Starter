import React from 'react';
import Tile from './Tile';
import './styles/Map.css';

// practice tomorrow

const Map = ({ improvements, addImprovement, updateResources, resources }) => {
  const gridSize = 5;

  
  return (
    <div> 
      <div className="map"> 
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const improvement = improvements.find((imp) => imp.index === index);
          return (
            <Tile
              key={index}
              index={index}
              improvement={improvement}
              addImprovement={addImprovement}
              updateResources={updateResources}
              resources={resources}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Map;
