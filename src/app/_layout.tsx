import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from 'expo-router';
import { useCallback } from 'react';
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
	useLogTrackPlayerState();

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync();
	}, []);

	// setup trackPlayer as soon as possible then hide the splash screen
	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	});
	return (
		<SafeAreaProvider>
			<GestureHandlerRootView>
				<RootNavigation />
				<StatusBar style="auto" />
			</GestureHandlerRootView>
		</SafeAreaProvider>
	);
};

const RootNavigation = () => {
	const {height} = Dimensions.get('window')
	console.log('this is height', height * 0.7)
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="player"
				options={{
					headerShown: false,
					presentation: 'card',
					gestureEnabled: true,
					gestureDirection: 'vertical',
					animationDuration: 400,
					gestureResponseDistance: {
						bottom: 200,
					},
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
