import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

class SmurfList extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<p>Friend List</p>
            {
               this.props.smurfs.map( smurf=> {
                  return <p>{smurf.name}</p>
               })
            }
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs
	};
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
