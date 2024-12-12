import React, { useState } from "react";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import { Improvements } from "./Improvements";
import "./styles/Tile.css";
import Icon from "./Icon";

const Tile = ({
	index,
	improvement,
	addImprovement,
	updateResources,
	resources,
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// Handle opening the dialog
	const handleOpenDialog = () => {
		setIsDialogOpen(!isDialogOpen);
	};

	// Handle closing the dialog box
	const handleCloseDialog = () => {
		setIsDialogOpen(!isDialogOpen);
	};
	

	return (
		<div className='tile' onClick={() => handleOpenDialog(true)}>
			{improvement
				? isDialogOpen && (
						<EditImprovementDialog
							improvement={improvement}
							updateResources={updateResources}
							resources={resources}
							closeDialog={handleCloseDialog} // This is passed to EditImprovementDialog
						/>
				  )
				: isDialogOpen && (
						<AddImprovementDialog
							index={index}
							addImprovement={addImprovement}
							resources={resources}
							onClose={handleCloseDialog} // Pass handleCloseDialog to AddImprovementDialog as onClose
						/>
				  )}
			<Icon improvement={improvement} />
		</div>
	);
};

export default Tile;
