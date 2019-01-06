import React, { Component } from 'react';
import {
	Container,
	Header,
	Item,
	Input,
	Icon,
	Button,
	Text
} from 'native-base';

export default class SearchBarExample extends Component {
	render() {
		return (
			<Header searchBar rounded>
				<Item>
					<Icon name="ios-search" />
					<Input placeholder="Filter..." />
				</Item>
				<Button transparent>
					<Text>Search</Text>
				</Button>
			</Header>
		);
	}
}
