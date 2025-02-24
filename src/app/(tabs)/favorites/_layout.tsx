import { Stack } from "expo-router"
import { View } from "react-native"

const FavoritesScreen = () => (
    <Stack>
        <Stack.Screen name='index' options={{
            headerTitle: 'Favorites',
        }} />
    </Stack>
)

export default FavoritesScreen