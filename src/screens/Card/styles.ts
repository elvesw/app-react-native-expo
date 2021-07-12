import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 30px 40px;

	background-color: #282828;
`;

export const Title = styled.Text`
	color: #ff9000;
	font-size: 26px;
`;

export const Button = styled.TouchableOpacity`
	width: 100%;
	height: 48px;
	background-color: #ff9000;
	border-radius: 10px;
	margin-top: 50px;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
`;

export const ButtonText = styled.Text`
	color: #312e38;
	font-size: 18px;
	justify-content: space-between;
`;
