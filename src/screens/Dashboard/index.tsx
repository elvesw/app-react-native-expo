import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

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
				<Icon
					name="id-card"
					size={20}
					color="#312e38"
					style={{ marginHorizontal: 12 }}
				/>
				<ButtonText>ID CARD</ButtonText>
			</Button>
		</Container>
	);
};

export default Dashboard;
