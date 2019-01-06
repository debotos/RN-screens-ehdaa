import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
export default class RewardScreen extends React.Component {
	static navigationOptions = {
		header: null,
		title: 'Reward'
	};

	render() {
		return (
			<Container>
				<SearchBar />
				<Content style={styles.contentContainer}>
					<Table />
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	contentContainer: { paddingRight: 12, paddingLeft: 12, paddingTop: 8 }
});
