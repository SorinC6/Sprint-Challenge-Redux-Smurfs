/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCSESS = 'FETCH_SMURF_SUCCSESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const Delete_SMURF_FAIL = 'Delete_SMURF_FAIL';

const fetchURL = 'http://localhost:3333/smurfs/';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: FETCH_SMURF_START });
	axios
		.get(fetchURL)
		.then((res) => dispatch({ type: FETCH_SMURF_SUCCSESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCH_SMURF_FAIL, payload: err.message }));
};

export const addSmurf = (smurf) => (dispatch) => {
	dispatch({ type: ADD_SMURF_START });
	axios
		.post(fetchURL, smurf)
		.then((res) => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: ADD_SMURF_FAIL, payload: err.message }));
};

export const deleteSmurf = (id) => (dispatch) => {
	dispatch({ type: DELETE_SMURF_START });
	axios
		.delete(`${fetchURL}${id}`)
		.then((res) => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: Delete_SMURF_FAIL, payload: err.message }));
};
