import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppLayout = () => {
	console.log('kion here',)
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style='auto' />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	console.log('in here',)
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