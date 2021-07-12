import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Card from '../screens/Card';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
	<App.Navigator
		screenOptions={{
			headerShown: true,
			cardStyle: { backgroundColor: '#312e38' },
		}}
		initialRouteName="Dashboard"
	>
		<App.Screen name="Dashboard" component={Dashboard} />
		<App.Screen name="Card" component={Card} />
	</App.Navigator>
);

export default AppRoutes;
