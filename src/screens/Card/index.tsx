import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Button, ButtonText } from './styles';

const Card: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToDashboard = useCallback(() => {
		navigate('Dashboard');
	}, []);

	return (
		<Container>
			<Title>Screen Card</Title>

			<Button onPress={navigateToDashboard}>
				<ButtonText>ir para screen DASHBOARD</ButtonText>
			</Button>
		</Container>
	);
};

export default Card;
