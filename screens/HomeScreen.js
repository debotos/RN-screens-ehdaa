import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import SearchBar from '../components/SearchBar';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={styles.container}>
				<SearchBar />
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<Text>HomeScreen View</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},

	contentContainer: {}
});
