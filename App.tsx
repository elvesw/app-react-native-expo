import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Routes from './src/routes';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<View style={{ flex: 1, backgroundColor: '#585858' }}>
				<Routes />
			</View>
		</NavigationContainer>
	);
};

export default App;
