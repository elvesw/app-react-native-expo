import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const Dashboard: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToCard = useCallback(() => {
		navigate('Card');
	}, []);

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				paddingHorizontal: 8,
				paddingVertical: 30,
				backgroundColor: '#222831',
			}}
		>
			<TouchableOpacity
				onPress={navigateToCard}
				style={{
					backgroundColor: '#FF9000',
					width: '100%',
					height: 48,
					borderRadius: 10,
				}}
			>
				<Text>ir para screen CARD</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Dashboard;
