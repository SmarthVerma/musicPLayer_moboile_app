import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from "expo-router";
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {


	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		// onLoad: handleTrackPlayerLoaded
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

const Test = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text} >Open up App.tsx to start working on your app!</Text>
		</View>
	)
}


export default AppLayout;