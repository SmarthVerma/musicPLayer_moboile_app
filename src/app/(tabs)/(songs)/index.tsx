import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View, Text, ScrollView, FlatListProps } from "react-native"
import library from "@/assets/data/library.json";
import { useMemo } from "react"
import { trackTitleFilter } from "@/helper/filter"


const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Search songs',
        }
    })

    const filteredTracks = useMemo(() => {
        if (!search) return library

        return library.filter(trackTitleFilter(search))
    }, [search])

    return (
        <View style={defaultStyles.container}>
            <ScrollView contentInsetAdjustmentBehavior="always" style={{ paddingHorizontal: screenPadding.horizontal }} >
                <TracksList tracks={filteredTracks} scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongsScreen