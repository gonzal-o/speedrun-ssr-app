import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Loading } from '../../common';
import ErrorPage from '../errors/errorPage';
import GameInfoComponent from './GameInfoComponent';
import Arrow from '../../icons/leftArrow.png';

const propTypes = {
	fetchGame: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	gameData: PropTypes.object,
	playerInfo: PropTypes.object,
	videoUrl: PropTypes.string,
	runs: PropTypes.object,
	error: PropTypes.bool.isRequired,
	noData: PropTypes.bool.isRequired,
};

class GameComponent extends Component {
	componentDidMount() {
		const { fetchGame, match } = this.props;
		const id = match.params.id;

		fetchGame(id);
	}

	render() {
		const {
			isFetching,
			gameData,
			playerInfo,
			videoUrl,
			runs,
			error,
			noData,
		} = this.props;

		if (isFetching || !runs || error) {
			if ((noData && gameData) || error) {
				return (
					<React.Fragment>
						<ErrorPage gameData={gameData} />
					</React.Fragment>
				);
			} else {
				return <Loading />;
			}
		}

		return (
			<div className="container">
				<NavLink id={'arrow-back'} className={'arrow-back'} to={'/'}>
					<img src={Arrow} />
				</NavLink>
				<div className={'game-info-container'}>
					<div className="game-container">
						<h1 className={'game-title'}>{gameData.game.gameName}</h1>
						<img src={gameData.game.gameImg} />
					</div>
					<GameInfoComponent
						playerInfo={playerInfo}
						videoUrl={videoUrl}
						runs={runs}
					/>
				</div>
			</div>
		);
	}
}

GameComponent.propTypes = propTypes;

export default GameComponent;
