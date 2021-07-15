import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, Title, Button, ButtonText } from './styles';

const FormToCreate: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToPostCreatedSuccessfully = useCallback(() => {
		navigate('PostCreatedSuccessfully');
	}, []);

	return (
		<Container>
			<Title>Screen FormToCreate</Title>

			<Button onPress={navigateToPostCreatedSuccessfully}>
				<Icon
					name="check"
					size={20}
					color="#312e38"
					style={{ marginHorizontal: 12 }}
				/>
				<ButtonText>FORM TO SCREEN Successfully</ButtonText>
			</Button>
		</Container>
	);
};

export default FormToCreate;
