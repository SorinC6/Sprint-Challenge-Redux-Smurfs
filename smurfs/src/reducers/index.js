/*
  Be sure to import in all of the action types from `../actions`
*/

import {
	FETCH_SMURF_FAIL,
	FETCH_SMURF_SUCCSESS,
	FETCH_SMURF_START,
	ADD_SMURF_START,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAIL
} from '../actions/index';

//Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
	smurfs: [],
	isFetchingSmurfs: false,
	isAddingSmurf: false,
	isUpdatingSmurf: false,
	isDeletingSmurf: false,
	error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		// ==============FETCH CASE ===================
		case FETCH_SMURF_START:
			return {
				...state,
				isFetchingSmurfs: true,
				error: null
			};
		case FETCH_SMURF_SUCCSESS:
			return {
				...state,
				isFetchingSmurfs: false,
				smurfs: action.payload,
				error: null
			};
		case FETCH_SMURF_FAIL:
			return {
				...state,
				isFetchingSmurfs: false,
				error: action.payload
			};
		// ================ADD CASE ================
		case ADD_SMURF_START:
			return {
				...state,
				isAddingSmurf: true,
				error: null
			};
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				isAddingSmurf: false,
				smurfs: action.payload,
				error: null
			};
		case ADD_SMURF_FAIL:
			return {
				...state,
				isAddingSmurf: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default smurfReducer;
