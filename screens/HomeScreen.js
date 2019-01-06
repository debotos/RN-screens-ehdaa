import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content } from 'native-base';

import SearchBar from '../components/SearchBar';
import Picker from '../components/Picker';
import ComplainForm from '../components/ComplainForm';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			selected: 'type' // 'type' or 'reason' can be here for now
		};
	}

	handleSelect = value => {
		this.setState({ selected: value });
	};

	render() {
		let { selected } = this.state;
		return (
			<Container>
				<SearchBar />
				<Content style={styles.contentContainer}>
					<View style={styles.picker}>
						<Picker selected={selected} handleSelect={this.handleSelect} />
					</View>
					{selected === 'reason' && (
						<View>
							<ComplainForm />
						</View>
					)}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	contentContainer: { paddingRight: 12, paddingLeft: 12, paddingTop: 8 },
	picker: {}
});
