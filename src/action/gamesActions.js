import axios from 'axios';

import {
	REQUEST_GAMES,
	RECEIVE_GAMES,
	RECEIVE_GAME,
	NO_RECEIVE_GAME,
	REQUEST_GAME,
	ERROR,
} from './types';

export const fetchGames = sortGames => async dispatch => {
	try {
		dispatch({ type: REQUEST_GAMES });
		let first20games = undefined;
		let second20games = undefined;
		if (sortGames) {
			first20games = await axios.get(
				'https://www.speedrun.com/api/v1/games?orderby=created&direction=desc'
			);
			second20games = await axios.get(
				'https://www.speedrun.com/api/v1/games?orderby=created&direction=desc&offset=20'
			);
		} else {
			first20games = await axios.get('https://www.speedrun.com/api/v1/games');
			second20games = await axios.get(
				'https://www.speedrun.com/api/v1/games?offset=20'
			);
		}
		dispatch({
			type: RECEIVE_GAMES,
			payload: [...first20games.data.data, ...second20games.data.data],
		});
	} catch (e) {
		dispatch({
			type: RECEIVE_GAMES,
			payload: [],
		});
	}
};

export const fetchGame = id => async dispatch => {
	try {
		dispatch({ type: REQUEST_GAME });

		const res = await axios.get(`https://www.speedrun.com/api/v1/games/${id}`);
		const resRuns = await axios.get(
			`https://www.speedrun.com/api/v1/runs?game=${id}`
		);

		const gameInfo = {
			gameName: res.data.data.names.international,
			gameImg: res.data.data.assets['cover-medium'].uri,
			imgs: res.data.data,
		};
		if (resRuns.data.data.length < 1) {
			dispatch({
				type: NO_RECEIVE_GAME,
				payload: { game: { ...gameInfo } },
			});
			return;
		}
		const videosUrl = resRuns.data.data[0].videos.links[0].uri;
		const playerUri = resRuns.data.data[0].players[0].uri;

		const resPlayer = await axios.get(playerUri);

		const runsList = resRuns.data.data;
		const playerData = resPlayer.data.data;

		const playerInfo = {};

		if (playerData.name) {
			playerInfo['name'] = playerData.name;
		}
		if (playerData.names) {
			playerInfo['name'] = playerData.names.international;
		} else {
			playerInfo['name'] = 'No name';
		}
		const runs = {
			game: runsList[0].game,
			category: runsList[0].category,
			date: runsList[0].date,
			comment: runsList[0].comment,
			realtime: runsList[0].times.realtime_t,
		};

		dispatch({
			type: RECEIVE_GAME,
			payload: {
				game: { ...gameInfo },
				runs,
				playerInfo: playerInfo,
				videoUrl: videosUrl,
				error: false,
			},
		});
	} catch (e) {
		dispatch({
			type: ERROR,
			error: true,
		});
	}
};
