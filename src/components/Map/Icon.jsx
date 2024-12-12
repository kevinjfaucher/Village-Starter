import React from "react";
import { Improvements } from "./Improvements";
import './styles/Icon.css'
const Icon = ({ improvement }) => {
    const container = {
        position: 'absolute'
    }
    return (
			<>
            {improvement ?
                improvement.hasOwnProperty('type') && (
					<div style={container}>
						<img src={Improvements[improvement.type].icon} />
						<div className='level'>{improvement.level}</div>
					</div>
				) : (
					""
				)}
			</>
		);
}

export default Icon