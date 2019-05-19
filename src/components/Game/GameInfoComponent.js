import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	playerInfo: PropTypes.object.isRequired,
	videoUrl: PropTypes.string.isRequired,
	runs: PropTypes.object.isRequired,
};

const GameInfoComponent = ({ playerInfo, videoUrl, runs }) => {
	return (
		<div className="game__info">
			<p id={'gameId'} className="game__key">
				Game ID:<span className="game__value"> {runs.game}</span>
			</p>
			<p id={'gameCategory'} className="game__key">
				Category:
				<span className="game__value"> {runs.category}</span>
			</p>
			<p id={'playerInfo'} className="game__key">
				Player's name:
				<span className="game__value"> {playerInfo.name}</span>{' '}
			</p>
			<p id={'runComment'} className="game__key">
				Run Comments:
				<span className="game__value"> {runs.comment}</span>
			</p>
			<p id={'runDate'} className="game__key">
				Run Date:
				<span className="game__value"> {runs.date}</span>
			</p>
			<p id={'runRealTime'} className="game__key">
				Run Real Time:
				<span className="game__value"> {runs.realtime}s</span>
			</p>
			<p id={'runRealTime'} className="game__key">
				<a className="game__value" target="_blank" href={videoUrl}>
					Play video
				</a>
			</p>
		</div>
	);
};

GameInfoComponent.propTypes = propTypes;

export default GameInfoComponent;
