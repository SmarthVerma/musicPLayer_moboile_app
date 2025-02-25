import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { colors } from './tokens';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerLargeStyle: {
		backgroundColor: colors.backgroundColor,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: true,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
};
