import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View, Text } from "react-native"

const ArtistsScreen = () => {

    return (
        <View style={{ backgroundColor: "#000", flex: 1 }}>
            <Text style={defaultStyles.text}>Artists screen</Text>
        </View>
    )
}

export default ArtistsScreen