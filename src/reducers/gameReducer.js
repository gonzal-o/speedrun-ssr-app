import { REQUEST_GAME, RECEIVE_GAME, NO_RECEIVE_GAME } from '../action/types';

const INITIAL_STATE = {
	isFetching: false,
	gameData: undefined,
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
			};
		}
		case NO_RECEIVE_GAME: {
			console.log('hemos ido a no data');
			return {
				...state,
				isFetching: false,
				noData: true,
				gameData: action.payload,
			};
		}
		default:
			return state;
	}
};
