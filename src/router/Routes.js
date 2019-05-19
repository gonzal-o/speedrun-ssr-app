import GameContainer from '../containers/GameContainer';
import GamesContainer from '../containers/GamesContainer';

export default [
	{
		component: GamesContainer,
		path: '/',
		exact: true,
	},
	{
		component: GameContainer,
		path: '/:id',
	},
];
