import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

export default class CardShowcaseExample extends Component {
	render() {
		let { id, title, status, info, image } = this.props.data;
		return (
			<Card style={{ flex: 0 }}>
				<CardItem>
					<Body>
						<Text style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
					</Body>
				</CardItem>
				<CardItem>
					<Body>
						<Image
							source={image}
							style={{ height: 100, width: 100, flex: 1 }}
						/>
					</Body>
				</CardItem>
				<CardItem>
					<Body>
						<Text style={{ color: '#ED4A6A' }}>{status}</Text>
						<Text>{info}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}
