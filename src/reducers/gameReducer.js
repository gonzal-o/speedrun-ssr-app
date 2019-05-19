import {
	REQUEST_GAME,
	RECEIVE_GAME,
	NO_RECEIVE_GAME,
	ERROR,
} from '../action/types';

const INITIAL_STATE = {
	isFetching: false,
	gameData: undefined,
	videoUrl: undefined,
	runs: undefined,
	playerInfo: undefined,
	isFetching: true,
	error: false,
	noData: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_GAME: {
			return {
				...state,
				gameData: undefined,
				videoUrl: undefined,
				runs: undefined,
				playerInfo: undefined,
				isFetching: true,
				error: false,
			};
		}
		case RECEIVE_GAME: {
			return {
				...state,
				isFetching: false,
				gameData: action.payload,
				videoUrl: action.payload.videoUrl,
				runs: action.payload.runs,
				playerInfo: action.payload.playerInfo,
				noData: false,
				error: false,
			};
		}
		case NO_RECEIVE_GAME: {
			return {
				...state,
				isFetching: false,
				noData: true,
				gameData: action.payload,
				error: false,
			};
		}
		case ERROR: {
			return {
				...state,
				error: action.error,
			};
		}
		default:
			return state;
	}
};
