import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes';

const App: React.FC = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#34495E' }}>
			<Routes />
		</View>
	);
};

export default App;
