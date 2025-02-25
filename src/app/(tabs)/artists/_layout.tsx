import { StackScreenWithSearchBar } from "@/constants/layout"
import { Stack } from "expo-router"
import { View } from "react-native"

const ArtistsScreen = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Artists',
        }} />
    </Stack>
)

export default ArtistsScreen