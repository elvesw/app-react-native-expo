import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const Card: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToDashboard = useCallback(() => {
		navigate('Dashboard');
	}, []);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				paddingHorizontal: 8,
				paddingVertical: 30,
				backgroundColor: '#393E46',
			}}
		>
			<TouchableOpacity
				onPress={navigateToDashboard}
				style={{
					backgroundColor: '#ff9000',
					width: '100%',
					height: 48,
					borderRadius: 10,
				}}
			>
				<Text>ir para screen DASHBOARD</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Card;
