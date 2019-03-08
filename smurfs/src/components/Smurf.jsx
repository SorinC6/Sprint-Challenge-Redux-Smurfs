import React from 'react';
import './Smurf.css';

const Smurf = (props) => {
	const { name, age, height, id } = props.smurf;
	return (
		<div className="smurf-container">
			<h2>{name}</h2>
			<p>Age: {age} years old</p>
			<p>Height: {height}</p>
			<button className="delete-btn" onClick={() => props.deleteSmurf(id)}>X</button>
		</div>
	);
};

export default Smurf;
