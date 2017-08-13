import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './';
import firebase from 'firebase';

class LoginForm extends Component {
	// sets the default state of the component
	state = { email: '', password: '', error: '', loading: false };
	// Helper method for handling when the user presses the 'Login' button.
	onButtonPress () {
		// Adds the email and password values to state
		const { email,password } = this.state;
		// Clear the error state and change the loading state to true
		this.setState({ error: '', loading: true });
		// Tries logging in with email and password
		firebase.auth().signInWithEmailAndPassword(email, password)
			// This is a function we are passing off to a promise, that is going to be invoked at some time in the future, and we don't know the context, 
			// we have to bind the method to this. (Lecture 74)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFailed.bind(this));
		}); 
	}

	// Helper method that clears the state when the login is succesful
	onLoginSuccess () {
		this.setState({
			email: '',
			password: '',
			loading: false, 
			error: '', 
		});

	}

	// Helper method that clears the loading state and displays Authentication Failed error
	onLoginFailed () {
		this.setState({
			loading: false,
			error: 'Authentication Failed',
		});
	}

	// Helper method to determine if the button is rendered or if the spinner is rendered
	renderButton () {
		// Boolean so doesn't need === true, just if it is there
		// doesn't need an else, because you can only return one object.
		if (this.state.loading) {
			return <Spinner size="small" />;
		} 

		return (
			<Button 
				style={styles.buttonStyle}
				onButtonPress={this.onButtonPress.bind(this)}>
				LOGIN
			</Button>
		);
		console.log("RENDERED BUTTON");
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder={'someone@example.com'}
						value={this.state.email}
						onChangeText={email=> this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder={'password'}
						value={this.state.password}
						onChangeText={password=> this.setState({ password })}
						secureTextEntry={true}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch', // Stretch to fill limits of container
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	},
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		lineHeight: 50,
	}
};

export { LoginForm };