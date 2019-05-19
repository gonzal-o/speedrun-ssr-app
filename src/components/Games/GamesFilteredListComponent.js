import React from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCardComponent';

const propTypes = {
	searching: PropTypes.bool.isRequired,
	filterdGamesList: PropTypes.array.isRequired,
	gamesData: PropTypes.array.isRequired,
};

const GamesFilteredList = ({ searching, filterdGamesList, gamesData }) => {
	if (searching) {
		return filterdGamesList.map((game, key) => {
			return <GameCard game={game} key={key} />;
		});
	} else {
		return gamesData.map((game, key) => {
			return <GameCard game={game} key={key} />;
		});
	}
};

GamesFilteredList.propTypes = propTypes;

export default GamesFilteredList;
