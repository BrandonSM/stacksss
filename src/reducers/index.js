import { combineReducers } from 'redux'; // makes reducers play nice together
import { LibraryReducer } from './LibraryReducer';

export default combineReducers ({
	libraries: LibraryReducer
});