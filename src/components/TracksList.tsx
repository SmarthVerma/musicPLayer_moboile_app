import { FlatList, FlatListProps, View } from 'react-native';
import library from '@/assets/data/library.json';
import { TrackListItem } from './TrackListItem';
import { utilsStyles } from '@/styles';
import TrackPlayer, { Track } from 'react-native-track-player';

export type TracksListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[]
}

const ItemDivider = () => (
    <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {

    const handleTrackSelect = async (track: Track) => {
        console.log('track is', track)
        await TrackPlayer.load(track)
    }

    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingBottom: 120, paddingTop: 10 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => {
                return <TrackListItem track={track} onTrackSelect={handleTrackSelect} />;
            }}
            {...flatlistProps}
        />
    );
};
