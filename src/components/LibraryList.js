import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {

		render () {
			return; 
		}
}

// Purpose is to take global state object, and will map some part of the state to props.
const mapStateToProps() = state => {
 console.log(state);
};

// calls the function connect(), when connect is called it returns another function, 
// then call that function with LibraryList. 2-step process
export default connect(mapStateToProps)(LibraryList);