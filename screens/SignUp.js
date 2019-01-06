import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import SignUpForm from '../components/SignUpForm';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SignUpForm />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c3e50',
		justifyContent: 'center'
	}
});
