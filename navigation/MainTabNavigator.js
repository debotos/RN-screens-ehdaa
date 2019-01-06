import React from 'react';
import { Platform } from 'react-native';

import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import RewardScreen from '../screens/RewardScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
		/>
	)
};

const TicketStack = createStackNavigator({
	Links: TicketScreen
});

TicketStack.navigationOptions = {
	tabBarLabel: 'Ticket',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-cloud' : 'md-cloud'}
		/>
	)
};

const RewardStack = createStackNavigator({
	Settings: RewardScreen
});

RewardStack.navigationOptions = {
	tabBarLabel: 'Reward',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'}
		/>
	)
};

export default createBottomTabNavigator({
	HomeStack,
	TicketStack,
	RewardStack
});
