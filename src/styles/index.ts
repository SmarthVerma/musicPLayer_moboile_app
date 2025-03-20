import { colors, fontSize } from '../constants/tokens';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundColor,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
});

export const utilsStyles = StyleSheet.create({
	itemSeparator: {
		borderColor: colors.textMuted,
		borderWidth: StyleSheet.hairlineWidth,
		opacity: 0.5,
	},
	slider: {
		height: 7,
		borderRadius: 16,
	},
	emptyContentText: {
		...defaultStyles.text,
		color: colors.textMuted,
		textAlign: 'center',
		marginTop: 20,
	},
	emptyContentImage: {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginTop: 40,
		opacity: 0.3,
	},
	centeredRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
