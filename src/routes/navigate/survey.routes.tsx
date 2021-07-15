/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { tabBarOptions } from '../navigatorOptions';

function VoteScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Survey VOTE screen !</Text>
		</View>
	);
}

function ResultScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Survey RESULT screen !</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export const SurveyRoutes: React.FC = () => (
	<Tab.Navigator
		tabBarOptions={tabBarOptions}
		sceneContainerStyle={{}}
		initialRouteName="VoteScreen"
	>
		<Tab.Screen
			name="VoteScreen"
			component={VoteScreen}
			options={{
				tabBarLabel: 'Enquete Votação',
				tabBarBadge: 3,
				tabBarIcon: ({ color, size }) => (
					<Icon name="home" color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name="ResultScreen"
			component={ResultScreen}
			options={{
				tabBarLabel: 'Enquete Resultado',
				tabBarIcon: ({ color, size }) => (
					<Icon name="id-card" color={color} size={size} />
				),
			}}
		/>
	</Tab.Navigator>
);
