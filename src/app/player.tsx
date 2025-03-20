import { MovingText } from '@/components/MovingText';
import { unknownTrackImageUri } from '@/constants/images';
import { colors, fontSize, screenPadding } from '@/constants/tokens';
import { defaultStyles, utilsStyles } from '@/styles';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useActiveTrack } from 'react-native-track-player';
import { FontAwesome } from '@expo/vector-icons';
import { PlayerProgressBar } from '@/components/PlayerProgressbar';
import { PlayerControls } from '@/components/PlayerControls';
import PlayerVolumeBar from '@/components/PlayerVolumeBar';
import React from 'react';
import { PlayerRepeatToggle } from '@/components/PlayerRepeatToggle';
import {
	PanGestureHandler,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { usePlayerBackground } from '@/hooks/usePlayerBackground';
import { LinearGradient } from 'expo-linear-gradient';

const GESTURE_START_THRESHOLD = 200; // Only allow gestures starting from top 200px

const PlayerScreen = () => {
	const activeTrack = useActiveTrack();
	const { top, bottom } = useSafeAreaInsets();
	const { imageColors } = usePlayerBackground(
		activeTrack?.artwork ?? unknownTrackImageUri,
	);

	const isFavorite = false;

	const toggleFavorite = () => {};

	if (!activeTrack) {
		return (
			<View style={[defaultStyles.container, { justifyContent: 'center' }]}>
				<ActivityIndicator color={colors.icon} />
			</View>
		);
	}

	return (
		<LinearGradient style={{flex: 1}} colors={imageColors ? [imageColors.background, imageColors.primary] : [colors.backgroundColor, colors.backgroundColor]}>
			<View style={styles.overlayContainer}>
				<DismissPlayerSymbol />

				<View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
					<View style={styles.artworkImageContainer}>
						<FastImage
							source={{
								uri: activeTrack.artwork ?? unknownTrackImageUri,
								priority: FastImage.priority.high,
							}}
							resizeMode="cover"
							style={styles.artworkImage}
						/>
					</View>

					<View style={{ flex: 1 }}>
						<View style={{ marginTop: 'auto' }}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								{/* Track Title */}
								<View style={styles.trackTitleContainer}>
									<MovingText
										text={activeTrack.title ?? ''}
										animationThreshold={30}
										style={styles.trackTitleText}
									/>
								</View>

								{/* Favorite button icon */}
								<FontAwesome
									name={isFavorite ? 'heart' : 'heart-o'}
									size={20}
									color={isFavorite ? colors.primary : colors.icon}
									style={{ marginHorizontal: 14 }}
									onPress={toggleFavorite}
								/>
							</View>

							{/* Track artist */}
							{activeTrack.artist && (
								<Text
									numberOfLines={1}
									style={[styles.trackArtistText, { marginTop: 6 }]}
								>
									{activeTrack.artist}
								</Text>
							)}
						</View>

						<PlayerProgressBar style={{ marginTop: 32 }} />
						<PlayerControls style={{ marginTop: 40 }} />
					</View>

					<PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />

					<View style={utilsStyles.centeredRow}>
						<PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
					</View>
				</View>
			</View>
		</LinearGradient>
	);
};

const DismissPlayerSymbol = () => {
	const { top } = useSafeAreaInsets();
	return (
		<View
			style={{
				position: 'absolute',
				top: top + 10,
				left: 0,
				right: 0,
				flexDirection: 'row',
				justifyContent: 'center',
			}}
		>
			<View
				accessible={false}
				style={{
					width: 50,
					height: 8,
					borderRadius: 8,
					backgroundColor: 'white',
					opacity: 0.7,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	overlayContainer: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		flex: 1,
	},
	artworkImageContainer: {
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 11,
		flexDirection: 'row',
		justifyContent: 'center',
		height: '45%',
	},
	artworkImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 12,
	},
	trackTitleContainer: { flex: 1, overflow: 'hidden' },
	trackTitleText: { ...defaultStyles.text, fontSize: 22, fontWeight: '700' },
	trackArtistText: {
		...defaultStyles.text,
		fontSize: fontSize.base,
		opacity: 0.8,
		maxWidth: '90%',
	},
});

export default PlayerScreen;
