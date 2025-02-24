import { Stack } from "expo-router"
import { View } from "react-native"

const ArtistsScreen = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            headerTitle: 'Artists',
        }} />
    </Stack>
)

export default ArtistsScreen