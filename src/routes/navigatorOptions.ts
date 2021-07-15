import { colors } from '../styles/colors';

export const screenOptions = {
	headerStyle: {
		elevation: 0,
		shadowColor: 'transparent',
		backgroundColor: colors.tertiary,
	},
	headerBackTitle: ' ',
	headerTintColor: colors.lightTint,
	headerTitleAlign: 'center',
};
export const tabBarOptions = {
	activeTintColor: '#ff9000',
	labelStyle: {
		fontSize: 14,
	},
	indicatorStyle: {
		backgroundColor: colors.secondary,
	},
	cardStyle: {
		backgroundColor: 'white',
	},
	sceneContainerStyle: {
		backgroundColor: '#fff',
	},
	style: {
		backgroundColor: colors.darkTint,
		borderBottomWidth: 0,
		elevation: 0,
	},
};
