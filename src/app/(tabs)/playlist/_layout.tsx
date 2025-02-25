import { StackScreenWithSearchBar } from "@/constants/layout"
import { Stack } from "expo-router"
import { View } from "react-native"

const PlaylistScreen = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Playlist',
        }} />
    </Stack>
)

export default PlaylistScreen