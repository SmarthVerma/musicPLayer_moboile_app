import { Stack } from "expo-router"
import { View } from "react-native"

const PlaylistScreen = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            headerTitle: 'Playlist',
        }} />
    </Stack>
)

export default PlaylistScreen