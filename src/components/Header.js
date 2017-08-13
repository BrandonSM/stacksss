// Import libraries
import React, { Component } from 'react'
import { StyleSheet, Text,View } from 'react-native';

// Create Component 
const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
		);
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor:'#F8F8F8',
		justifyContent:'center',
		alignItems:'center',
		height: 65,
		paddingTop:20,
		shadowColor:'#000001',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
	},
});

// Make component available
export { Header };