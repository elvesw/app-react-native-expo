/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { tabBarOptions } from '../navigatorOptions';

import SelectLocationOnMap from '../../screens/Post/toCreate/SelectLocationOnMap';
import SelectLocationOnList from '../../screens/Post/toCreate/SelectLocationOnList';
import FormToCreate from '../../screens/Post/toCreate/FormToCreate';
import PostCreatedSuccessfully from '../../screens/Post/toCreate/PostCreatedSuccessfully';

const Tab = createBottomTabNavigator();

function SelectMapOrList() {
	return (
		<Tab.Navigator tabBarOptions={tabBarOptions}>
			<Tab.Screen
				name="MapScreen"
				component={SelectLocationOnMap}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name="map-marked" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="ListScreen"
				component={SelectLocationOnList}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name="list" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const App = createStackNavigator();

export const PostRoutes: React.FC = () => (
	<App.Navigator
		screenOptions={{
			headerShown: true,
		}}
	>
		<App.Screen name="SelectMapOrList" component={SelectMapOrList} />
		<App.Screen name="FormToCreate" component={FormToCreate} />
		<App.Screen
			name="PostCreatedSuccessfully"
			component={PostCreatedSuccessfully}
		/>
	</App.Navigator>
);
