import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

export default class TicketScreen extends React.Component {
	static navigationOptions = {
		header: null,
		title: 'Links'
	};

	render() {
		return (
			<View style={styles.container}>
				<SearchBar />
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<Text>TicketScreen</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 19,
		backgroundColor: '#fff'
	},

	contentContainer: {}
});
