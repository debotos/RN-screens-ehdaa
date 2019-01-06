import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class TicketScreen extends React.Component {
	static navigationOptions = {
		header: null,
		title: 'Links'
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
				>
					<Text>Tic</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		backgroundColor: '#fff'
	},

	contentContainer: {}
});
