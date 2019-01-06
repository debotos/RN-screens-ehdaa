import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';

import SearchBar from '../components/SearchBar';

export default class TicketDetails extends Component {
	static navigationOptions = {
		title: `Details`,
		header: null
	};

	render() {
		const { id, title, status, info, image } = this.props.navigation.getParam(
			'data',
			{}
		);

		return (
			<Container>
				<SearchBar />
				<Content style={styles.contentContainer}>
					<View>
						<Text>{title}</Text>
						<Text>{status}</Text>
						<Text>{info}</Text>
					</View>
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
