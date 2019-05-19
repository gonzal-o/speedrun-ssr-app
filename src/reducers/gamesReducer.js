import { REQUEST_GAMES, RECEIVE_GAMES } from '../action/types';

const INITIAL_STATE = {
	isFetching: false,
	gamesData: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_GAMES: {
			return {
				...state,
				isFetching: true,
			};
		}
		case RECEIVE_GAMES: {
			return {
				...state,
				isFetching: false,
				gamesData: action.payload,
			};
		}
		default:
			return state;
	}
};
