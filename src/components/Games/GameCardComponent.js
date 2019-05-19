import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
	game: PropTypes.object.isRequired,
};

const gameCard = ({ game }) => {
	if (!game) {
		return;
	}
	return (
		<NavLink to={`/${game.id}`} id={game.id} className="games-item">
			<img
				width={100}
				height={100}
				src={game.assets['cover-large'].uri || ''}
				alt={game.id}
			/>
			<div className="games-item-data">
				<h4 id="game-title">
					{game.names.international.replace(/[^a-zA-Z ]/g, '') ||
						game.abbreviation}
				</h4>
			</div>
		</NavLink>
	);
};

gameCard.propTypes = propTypes;

export default gameCard;
