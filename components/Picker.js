import React, { Component } from 'react';
import { Picker } from 'native-base';

export default class PickerExample extends Component {
	handleChange = value => {
		this.props.handleSelect(value);
	};

	render() {
		return (
			<Picker
				note
				mode="dropdown"
				selectedValue={this.props.selected}
				onValueChange={this.handleChange}
			>
				<Picker.Item label="Type of complaint" value="type" />
				<Picker.Item label="Reason for complaint" value="reason" />
			</Picker>
		);
	}
}
