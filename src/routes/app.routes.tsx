import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeRoutes } from './navigate/home.routes';
import { SurveyRoutes } from './navigate/survey.routes';
import { PostRoutes } from './navigate/post.routes';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
	<App.Navigator
		screenOptions={{
			headerShown: true,
			cardStyle: { backgroundColor: '#b92323' },
		}}
		initialRouteName="Home"
	>
		<App.Screen name="Home" component={HomeRoutes} />
		<App.Screen name="Survey" component={SurveyRoutes} />
		<App.Screen
			name="Post"
			component={PostRoutes}
			options={{ headerShown: false }}
		/>
	</App.Navigator>
);

export default AppRoutes;
