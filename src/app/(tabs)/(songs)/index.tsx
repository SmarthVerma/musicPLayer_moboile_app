import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View, Text, ScrollView, FlatListProps } from "react-native"



const SongsScreen = () => {
    console.log('songs Screen',)
    return (
        <View style={defaultStyles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ paddingHorizontal: screenPadding.horizontal }} >
                <TracksList scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongsScreen