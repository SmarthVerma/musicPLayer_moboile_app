import { Event, useTrackPlayerEvents } from 'react-native-track-player';

const event = [
	Event.PlaybackState,
	Event.PlaybackError,
	Event.PlaybackActiveTrackChanged,
];

export const useLogTrackPlayerState = () => {
	useTrackPlayerEvents(event, async (event) => {
		if (event.type === Event.PlaybackState) {
			console.log('playback state', event.state);
		}
		if (event.type === Event.PlaybackActiveTrackChanged) {
			console.log('active track', event.index);
		}
		if (event.type === Event.PlaybackError) {
			console.error('playback error', event);
		}
	});
};
