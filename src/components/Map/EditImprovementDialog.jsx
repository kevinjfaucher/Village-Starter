import React, {useState} from 'react';
import './styles/EditImprovementDialog.css';
import { Improvements } from './Improvements';

const EditImprovementDialog = ({ improvement, updateResources, resources, closeDialog }) => {
  const [disableUpgrade, setDisableUpgrade] = useState(true); //disable uprading by default.
  const calcCosts = Object.fromEntries(
		Object.entries(Improvements[improvement.type].costs).map(([key, value]) => [ 
			key,
			value * (improvement.level + 1),
		])
	);
	if (
		Object.keys(resources).every(
			(key) =>
				resources[key] >=
				calcCosts[key]
		)
	) {
		setDisableUpgrade(false); //Enable user to upgrade improvement.
	}
	
	const handleUpgrade = () => {
		// TODO: Handle upgrade logic
		const costs = Object.fromEntries(
			Object.entries(Improvements[improvement.type].costs).map(
				([key, value]) => [key, -value * (improvement.level + 1)]
			)
		); //Access improvement level and multiply costs x current level + 1
		updateResources(costs); //Subtract costs
		improvement.level++;
	};

	const handleDowngrade = () => {
		// TODO: Handle downgrade logic
	};

	const handleRemove = () => {
		// TODO: Handle remove logic
	};

	return (
		<div className='edit-improvement-dialog'>
			<h3>{improvement.type}</h3>
			<button disabled={disableUpgrade} onClick={handleUpgrade}> 
				Upgrade
			</button>
			<button onClick={handleDowngrade}>Downgrade</button>
			<button onClick={handleRemove}>Remove</button>
			<button onClick={closeDialog}>Close</button>
		</div>
	);
};

export default EditImprovementDialog;
