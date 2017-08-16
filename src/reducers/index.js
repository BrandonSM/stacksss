import { combineReducers } from 'redux'; // makes reducers play nice together
import { LibraryReducer } from './LibraryReducer';

export default combineReducers ({
	libraries: LibraryReducer
});

// console.log(store.getState());
// libraries: {{ id: 1, title: 'webpack ', description: '....'}, { id: 2, title: 'react', description: '....' }}