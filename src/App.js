import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from './reducers';
import { Header, LibraryList } from './components';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
		<View>
			<Header headerText="Stackssss" />
			<LibraryList/>
		</View>
		</Provider>
	);
};

export default App;