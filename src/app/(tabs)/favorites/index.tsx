import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View, Text } from "react-native"

const FavoritesScreen = () => {
    return (
        <View style={{ backgroundColor: "#000", flex: 1 }}>
            <Text style={defaultStyles.text}>Favorites screen</Text>
        </View>
    )
}

export default FavoritesScreen