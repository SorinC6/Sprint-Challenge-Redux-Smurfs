import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import HeaderImg from '../assets/header.jpg';
import BackgroundImg from '../assets/background.jpg';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header" style={{ backgroundImage: `url(${HeaderImg})` }}>
					<h1>SMURFS! 2.0 W/ Redux</h1>
				</div>

				<div style={{backgroundImage: `url(${BackgroundImg})` , height:"500px"}}>
					<SmurfList />
				</div>
			</div>
		);
	}
}

export default App;
