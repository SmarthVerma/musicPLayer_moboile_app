import { Stack } from "expo-router"
import { View } from "react-native"

const SongsScreenLayout = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            headerTitle: 'Songs',
        }} />
    </Stack>
)

export default SongsScreenLayout