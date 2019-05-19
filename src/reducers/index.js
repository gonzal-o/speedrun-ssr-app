import { combineReducers } from 'redux';
import Games from './gamesReducer';
import Game from './gameReducer';

export default combineReducers({
	games: Games,
	game: Game,
});
