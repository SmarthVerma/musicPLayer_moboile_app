import { StackScreenWithSearchBar } from "@/constants/layout"
import { Stack } from "expo-router"
import { View } from "react-native"

const FavoritesScreen = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Favorites',
        }} />
    </Stack>
)

export default FavoritesScreen