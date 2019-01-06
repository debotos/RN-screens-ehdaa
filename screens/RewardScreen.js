import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

export default class RewardScreen extends React.Component {
	static navigationOptions = {
		header: null,
		title: 'Reward'
	};

	render() {
		return (
			<View style={styles.container}>
				<SearchBar />
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<Text>RewardScreen</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	contentContainer: { paddingRight: 12, paddingLeft: 12, paddingTop: 8 }
});
