import React, { useState } from "react";
import "./styles/AddImprovementDialog.css";
import { Improvements } from "./Improvements";
// import CloseDialogBox from "./CloseDialogButton";

const AddImprovementDialog = ({
	index,
	addImprovement,
	resources,
	closeDialog,
}) => {
	
	const [isVisible, setIsVisible] = useState(true);
	
	  
	const [type, setType] = useState("house");
	const handleAdd = () => {
		if (
			Object.keys(resources).every(
				(key) => resources[key] >= Improvements[type].costs[key]
			)
		) {
			//Compare resources to requested improvement using .every to compare all values in object
			addImprovement({ index, type, level: 1 });
			closeDialog();
		} else {
			alert(`You don't have the resources for that!`);
		}
	};

	return (
		<div className='add-improvement-dialog'>
			<label>
				Select Improvement:
				<select value={type} onChange={(e) => setType(e.target.value)}>
					<option value='house'>House</option>
					<option value='field'>Field</option>
					<option value='pasture'>Pasture</option>
					<option value='lumberMill'>Lumber Mill</option>
					<option value='well'>Well</option>
				</select>
			</label>
			<button onClick={handleAdd}>Add</button>
			{/* <button onClick={closeDialog}>Close</button> */}
			<button onClick={() => setIsVisible(!isVisible)}>
			{isVisible ? 'Close' : 'Open'}
			</button>
			{isVisible && (
			<div>
				
			</div>
			)}
			
		</div>
	);
};

export default AddImprovementDialog;
