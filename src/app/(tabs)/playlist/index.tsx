import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View, Text } from "react-native"

const SongsScreen = () => {
    console.log('songs Screen',)
    return (
        <View style={{backgroundColor: "#000", flex: 1}}>
            <Text style={defaultStyles.text}>PlayList screen</Text>
        </View>
    )
}

export default SongsScreen