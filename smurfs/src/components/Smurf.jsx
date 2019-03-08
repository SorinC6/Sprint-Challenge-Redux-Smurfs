import React from 'react';

const Smurf = (props) => {
	const { name, age, height, id } = props.smurf;
	return (
		<div>
			<h2>{name}</h2>
			<p>Age: {age} years old</p>
			<p>Height: {height}</p>
		</div>
	);
};

export default Smurf;
