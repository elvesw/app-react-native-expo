import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Button, ButtonText } from './styles';

const Dashboard: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToCard = useCallback(() => {
		navigate('Card');
	}, []);

	return (
		<Container>
			<Title>Screen Dashboard</Title>

			<Button onPress={navigateToCard}>
				<ButtonText>ir para screen CARD</ButtonText>
			</Button>
		</Container>
	);
};

export default Dashboard;
