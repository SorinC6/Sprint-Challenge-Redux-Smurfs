import React, { Component } from 'react';

export default class AddSmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newSmurf: {
				name: '',
				age: '',
				height: ''
			}
		};
	}
	handleChanges = (e) => {
		this.setState({
			newSmurf: {
				...this.state.newSmurf,
				[e.target.name]: e.target.value
			}
		});
	};

	addSmurf = (e) => {
		e.preventDefault();
		this.props.addSmurf(this.state.newSmurf);
	};

	render() {
		return (
			<div>
				<h1>Smurf Form</h1>
				<form onSubmit={this.addSmurf}>
					<input
						onChange={this.handleChanges}
						type="text"
						name="name"
						placeholder="What's this Smurfs Name?"
					/>
					<input
						onChange={this.handleChanges}
						type="number"
						name="age"
						placeholder="How Old is this Smurf?"
					/>
					<input
						onChange={this.handleChanges}
						type="number"
						name="height"
						placeholder="How Tall is this Smurf?"
					/>
					<button>Submit Smurf</button>
				</form>
			</div>
		);
	}
}
