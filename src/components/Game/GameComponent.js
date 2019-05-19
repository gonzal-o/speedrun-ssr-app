import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Loading } from '../../common';

const propTypes = {
	fetchGame: PropTypes.func.isRequired,
	game: PropTypes.shape({
		isFetching: PropTypes.bool.isRequired,
		gameData: PropTypes.object,
	}),
};

class GameComponent extends Component {
	componentDidMount() {
		const { fetchGame, match } = this.props;
		const id = match.params.id;

		fetchGame(id);
	}

	render() {
		const { isFetching, gameData, playerInfo, videoUrl, runs } = this.props;

		if (isFetching || !gameData || !runs) {
			if (this.props.noData && gameData) {
				return (
					<div className="container">
						<div className="game-container">
							<NavLink className={'arrow-back'} to={'/'}>
								<img src={'/assets/icons/left-arrow.png'} />
							</NavLink>
							<div className={'game-info-container'}>
								<h1>{gameData.game.gameName}</h1>
								<h1>404 Sorry no runs for this game</h1>
							</div>
						</div>
					</div>
				);
			} else {
				return <Loading />;
			}
		}

		return (
			<div className="container">
				<NavLink className={'arrow-back'} to={'/'}>
					<img src={'/assets/icons/left-arrow.png'} />
				</NavLink>
				<div className="game-container">
					<div className={'game-info-container'}>
						<h1>{gameData.game.gameName}</h1>
						<img src={gameData.game.gameImg} />
					</div>
					<div>
						<div className="game-data">
							<h4 id={'gameId'}>Game ID: {runs.game}</h4>
							<h4 id={'gameCategory'}>Category: {runs.category}</h4>
							<h4 id={'playerInfo'}>Player: {playerInfo.name || 'No name'}</h4>
						</div>
						<div className="game-data">
							<h4 id={'runComment'}>Comment: {runs.comment}</h4>
							<h4 id={'runDate'}>Date: {runs.date}</h4>
							<h4 id={'runRealTime'}>Time: {runs.realtime}s</h4>
						</div>
						<a target="_blank" href={videoUrl}>
							Play video
						</a>
					</div>
				</div>
			</div>
		);
	}
}

GameComponent.propTypes = propTypes;

export default GameComponent;
