import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, Title, Button, ButtonText } from './styles';

const SelectLocationOnList: React.FC = () => {
	const { navigate } = useNavigation();

	const navigateToFormToCreate = useCallback(() => {
		navigate('FormToCreate');
	}, []);

	return (
		<Container>
			<Title>Screen SelectLocationOnList</Title>

			<Button onPress={navigateToFormToCreate}>
				<Icon
					name="file-alt"
					size={20}
					color="#312e38"
					style={{ marginHorizontal: 12 }}
				/>
				<ButtonText>FORM TO CREATE POST</ButtonText>
			</Button>
		</Container>
	);
};

export default SelectLocationOnList;
