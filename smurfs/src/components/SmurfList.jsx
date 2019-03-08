import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/index';
import Loader from 'react-loader-spinner';
import Smurf from './Smurf';
import AddSmurfForm from './AddSmurfForm';

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	deleteSmurf = (id) => {
      this.props.deleteSmurf(id)
   };
	render() {
		console.log(this.props);
		return (
			<div>
				<div className="list-container">
					{this.props.isFetchingSmurfs && <Loader type="Puff" color="#00BFFF" height="100" width="100" />}
					{this.props.error && <h1 style={{ color: 'red' }}>{this.props.error}</h1>}
					{this.props.smurfs.map((smurf) => {
						return <Smurf key={smurf.id} smurf={smurf} deleteSmurf={this.deleteSmurf} />;
					})}
				</div>

				<AddSmurfForm addSmurf={this.props.addSmurf} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isFetchingSmurfs: state.isFetchingSmurfs,
		isAddingSmurf: state.isAddingSmurf,
		isUpdatingSmurf: state.isUpdatingSmurf,
		isDeletingSmurf: state.isDeletingSmurf,
		error: state.error
	};
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(SmurfList);
