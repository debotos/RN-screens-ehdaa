import React, { Component } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Button } from 'react-native';
import { Textarea, Form, View, Right } from 'native-base';
import { DocumentPicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class ComplainForm extends Component {
	_pickDocument = async () => {
		let result = await DocumentPicker.getDocumentAsync({});
		alert(result.uri);
		console.log(result);
	};

	_startRecording = () => {
		alert('Start Recording Button');
	};

	_submitComplain = () => {
		alert('Submit your Complain');
	};

	render() {
		return (
			<Form>
				<Textarea
					style={styles.textarea}
					rowSpan={5}
					bordered
					placeholder="Details info about your Complain"
				/>
				<View style={styles.buttonGroup}>
					<TouchableOpacity
						onPress={this._pickDocument}
						style={styles.attachment}
					>
						<Ionicons
							name={Platform.OS === 'ios' ? 'ios-attach' : 'md-attach'}
							size={32}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this._startRecording}
						style={styles.recording}
					>
						<Ionicons
							name={Platform.OS === 'ios' ? 'ios-mic' : 'md-mic'}
							size={32}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.submit}>
					<Button
						onPress={this._submitComplain}
						title="Submit"
						color="#841584"
						accessibilityLabel="Submit the Complain"
					/>
				</View>
			</Form>
		);
	}
}

const styles = StyleSheet.create({
	textarea: {
		padding: 5,
		borderColor: '#eee',
		borderRadius: 3,
		marginBottom: 5
	},
	buttonGroup: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	attachment: {
		padding: 5
	},
	recording: {
		padding: 5
	},
	submit: {
		alignSelf: 'center',
		marginTop: 30,
		marginBottom: 15
	}
});
