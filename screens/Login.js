import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LoginForm from '../components/LoginForm';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LoginForm />
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
