import TrackPlayer, { RepeatMode } from "react-native-track-player";
import { useEffect, useRef } from "react";

const setupPlayer = async () => {
    try {
        // Setup the player once
        const isSetup = await TrackPlayer.isServiceRunning();
        if (!isSetup) {
            await TrackPlayer.setupPlayer();
            console.log('TrackPlayer is set up');

            await TrackPlayer.setVolume(0.03); // not too loud
            await TrackPlayer.setRepeatMode(RepeatMode.Queue);
        }
    } catch (error) {
        console.error("Error setting up TrackPlayer:", error);
    }
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (!isInitialized.current) {
            setupPlayer()
                .then(() => {
                    isInitialized.current = true;
                    onLoad?.();
                })
                .catch((error) => {
                    console.error("Failed to initialize TrackPlayer:", error);
                });
        }

        // Clean up TrackPlayer instance on unmount
        return () => {
            TrackPlayer.reset();
            isInitialized.current = false;
        };
    }, [onLoad]);
};