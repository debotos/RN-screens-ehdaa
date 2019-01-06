import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import DatePicker from './DatePicker';

export default class AccountInfoForm extends Component {
	handleEditBtn = () => {
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

				<View style={styles.actionsContainer}>
					<Button
						title="Continue"
						color="#841584"
						onPress={() => alert('Continue..')}
					/>

					<Button
						onPress={this.handleEditBtn}
						title="Edit"
						color="#841584"
						accessibilityLabel="Edit button"
					/>
				</View>
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
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});
