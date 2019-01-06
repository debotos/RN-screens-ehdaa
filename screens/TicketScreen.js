import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import BusinessCard from '../components/BusinessCard';
export default class TicketScreen extends React.Component {
	renderCards = () => {
		// fill this data with real one after getting from ajax req
		const demoData = [
			{
				id: 1,
				title: 'Name of business',
				status: 'active',
				info: 'Some sort of details',
				image: require('../assets/images/robot-prod.png') // will be image url
			},
			{
				id: 2,
				title: 'Name of business',
				status: 'active',
				info: 'Some sort of details',
				image: require('../assets/images/robot-prod.png')
			},
			{
				id: 3,
				title: 'Name of business',
				status: 'active',
				info: 'Some sort of details',
				image: require('../assets/images/robot-prod.png')
			},
			{
				id: 4,
				title: 'Name of business',
				status: 'active',
				info: 'Some sort of details',
				image: require('../assets/images/robot-prod.png')
			}
		];

		return demoData.map((singleCard, index) => (
			<BusinessCard key={index} data={singleCard} />
		));
	};

	static navigationOptions = {
		header: null,
		title: 'Links'
	};

	render() {
		return (
			<Container>
				<SearchBar />
				<Content style={styles.contentContainer}>{this.renderCards()}</Content>
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
