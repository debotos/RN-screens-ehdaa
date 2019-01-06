import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class RewardScreen extends React.Component {
	static navigationOptions = {
		header: null,
		title: 'Reward'
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
				>
					<Text>RewardScreen</Text>
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
