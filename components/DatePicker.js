import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

export default class MyDatePicker extends Component {
	

	render() {
		return (
			<DatePicker
				style={{
					backgroundColor: 'rgba(225,225,225,0.4)',
					borderColor: 'transparent'
				}}
				date={this.props.date}
				mode="date"
				placeholder="select date"
				format="YYYY-MM-DD"
				minDate="1920-05-01"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				customStyles={{
					dateIcon: {
						position: 'absolute',
						left: 0,
						top: 4,
						marginLeft: 0
					},
					dateInput: {
						marginLeft: 36
					}
				}}
				onDateChange={this.props.onDateChange}
			/>
		);
	}
}
