/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { tabBarOptions } from '../navigatorOptions';

import Dashboard from '../../screens/Dashboard';
import Card from '../../screens/Card';

const Tab = createBottomTabNavigator();

export const HomeRoutes: React.FC = () => (
	<Tab.Navigator
		tabBarOptions={tabBarOptions}
		sceneContainerStyle={{}}
		initialRouteName="Dashboard"
	>
		<Tab.Screen
			name="Dashboard"
			component={Dashboard}
			options={{
				tabBarLabel: 'Home',
				tabBarBadge: 3,
				tabBarIcon: ({ color, size }) => (
					<Icon name="home" color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name="Card"
			component={Card}
			options={{
				tabBarLabel: 'ID',
				tabBarIcon: ({ color, size }) => (
					<Icon name="id-card" color={color} size={size} />
				),
			}}
		/>
	</Tab.Navigator>
);
