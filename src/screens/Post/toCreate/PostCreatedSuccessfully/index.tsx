import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, Title, Button, ButtonText } from './styles';

const PostCreatedSuccessfully: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToDashboard = useCallback(() => {
		navigate('Dashboard');
	}, []);

	return (
		<Container>
			<Title>Screen PostCreatedSuccessfully</Title>

			<Button onPress={navigateToDashboard}>
				<Icon
					name="home"
					size={20}
					color="#312e38"
					style={{ marginHorizontal: 12 }}
				/>
				<ButtonText>GO BACK DASHBOARD</ButtonText>
			</Button>
		</Container>
	);
};

export default PostCreatedSuccessfully;
