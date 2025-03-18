import { colors } from "@/constants/tokens"
import React from "react"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import TrackPlayer, { useIsPlaying } from "react-native-track-player"
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

type PlayerControlsProps = {
    style?: ViewStyle
}
type PlyerButtonProps = {
    style?: ViewStyle
    iconSize: number
}

export const PlayPauseButton = ({ style, iconSize }: PlyerButtonProps) => {
    const { playing } = useIsPlaying()

    return (
        <View style={[{ height: iconSize }, style]}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
            >
                <FontAwesome name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text} />
            </TouchableOpacity>
        </View>
    )
}

export const SkipToNextButton = ({ style, iconSize }: PlyerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => TrackPlayer.skipToNext}
        >
            <FontAwesome6 name='forward' size={iconSize} color={colors.text} />
        </TouchableOpacity>
    )
}

export const SkipToPreviousButton = ({ style, iconSize }: PlyerButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => TrackPlayer.skipToPrevious}
        >
            <FontAwesome6 name='backward' size={iconSize} color={colors.text} />
        </TouchableOpacity>
    )
}
