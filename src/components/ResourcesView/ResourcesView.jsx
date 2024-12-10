import React from 'react';
import ResourceLine from './ResourceLine';
import './styles/ResourcesView.css';
import people from '/src/images/Resources/people.png';
import grain from '/src/images/Resources/grain.png';
import sheep from '/src/images/Resources/sheep.png';
import lumber from '/src/images/Resources/lumber.png';
import water from '/src/images/Resources/water.png';



const ResourcesView = ({ resources }) => (
  <div className="resources-legend">
    <div className="resources-imgs">
      <img src={lumber} alt="Lumber"/>
      <img src={grain} alt="Grain"/>
      <img src={water} alt="Water"/>
      <img src={sheep} alt="Sheep"/>
      <img src={people} alt="People"/>
    </div>
    <div className="resources-view">
      {Object.entries(resources).map(([resource, amount]) => (
        <ResourceLine key={resource} resource={resource} amount={amount} />
      ))}
    </div>
  </div>
);

export default ResourcesView;