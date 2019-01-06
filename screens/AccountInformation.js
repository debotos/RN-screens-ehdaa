import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AccountInfoForm from '../components/AccountInfoForm';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<AccountInfoForm />
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
