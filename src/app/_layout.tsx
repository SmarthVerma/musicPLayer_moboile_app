import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from "expo-router";
import { useCallback } from 'react';
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {

	useLogTrackPlayerState()

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	// setup trackPlayer as soon as possible then hide the splash screen
	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded
	})
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style='auto' />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
		</Stack>
	)
}



export default AppLayout;