import React, { useState } from "react";
import "./styles/AddImprovementDialog.css";
import { Improvements } from "./Improvements";

const AddImprovementDialog = ({
index,
addImprovement,
resources,
onClose, // Expect onClose prop here
}) => {
const [type, setType] = useState("house");

const handleAdd = () => {
// Compare the cost of the selected improvement against current resources
if (
Object.keys(resources).every(
(key) => resources[key] >= Improvements[type].costs[key]
)
) {
// Add the improvement and close the dialog
addImprovement({ index, type, level: 1 });
onClose; // Ensure onClose is called to close the dialog
} else {
alert(`You don't have the resources for that!`);
}
};
const filteredImprovements = Object.fromEntries(
Object.entries(Improvements).filter(([key, value]) => value != 0)
);
return (
<div className="add-improvement-dialog">
<div className="select-container">
<label className="styled-label">
Select Improvement:
<select
className="styled-select"
value={type}
onChange={(e) => setType(e.target.value)}>
<option value="House">House</option>
<option value="field">Field</option>
<option value="pasture">Pasture</option>
<option value="lumberMill">Lumber Mill</option>
<option value="well">Well</option>
</select>
</label>
</div>
<div className="image-container">
<img className="styled-img" src={Improvements[type].icon} alt={type} />
</div>
<div className="details">
<h5 className="table-title">Costs and Benefits</h5>
<table className="modern-table">
<thead>
<tr>
<th></th>
<th>Cost</th>
<th>Benefit</th>
</tr>
</thead>
<tbody>
{Object.keys(filteredImprovements[type].costs).map((key) => (
<tr key={key}>
<td>{key}</td>
<td>{filteredImprovements[type].costs[key]}</td>
<td>{filteredImprovements[type].benefits[key]}</td>
</tr>
))}
</tbody>
</table>
</div>
<div className="button-container">
<button className="styled-button add-button" onClick={handleAdd}>
Add
</button>
<button className="styled-button close-button" onClick={onClose}>
Close
</button>
</div>
</div>
);
};

export default AddImprovementDialog;