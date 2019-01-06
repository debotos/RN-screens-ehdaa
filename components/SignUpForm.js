import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import DatePicker from './DatePicker';

export default class SignUpForm extends Component {
	onButtonPress = () => {
		alert('Submitting...' + JSON.stringify(this.state));
	};

	onDateChange = date => {
		this.setState({ date: date });
	};

	constructor(props) {
		super(props);
		this.state = { date: '2016-05-15', name: '', email: '' };
	}

	render() {
		let { date, name, email } = this.state;
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					returnKeyType="next"
					onSubmitEditing={() => this.emailInput.focus()}
					placeholder="Name"
					value={name}
					onChangeText={input => this.setState({ name: input })}
					placeholderTextColor="rgba(225,225,225,0.7)"
				/>

				<TextInput
					style={styles.input}
					autoCapitalize="none"
					ref={input => (this.emailInput = input)}
					autoCorrect={false}
					keyboardType="email-address"
					returnKeyType="go"
					placeholder="Email"
					value={email}
					onChangeText={input => this.setState({ email: input })}
					placeholderTextColor="rgba(225,225,225,0.7)"
				/>
				<View style={{ marginBottom: 10 }}>
					<DatePicker date={date} />
				</View>

				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={this.onButtonPress}
				>
					<Text style={styles.buttonText}>SIGNUP</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	buttonContainer: {
		backgroundColor: '#2980b6',
		paddingVertical: 15
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	}
});
