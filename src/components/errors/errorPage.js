import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Arrow from '../../icons/leftArrow.png';

const propTypes = {
	gameData: PropTypes.object,
};

class ErrorPage extends Component {
	render() {
		const { gameData } = this.props;

		return (
			<React.Fragment>
				<NavLink id={'arrow-back'} className={'arrow-404'} to={'/'}>
					<img src={Arrow} />
				</NavLink>
				<h1 className={'message'}>
					Sorry! We can not find any data for the Game:
				</h1>
				<h1 className={'message-title'}>
					{gameData ? gameData.game.gameName : ''}
				</h1>
				<div className={'planet'}>
					<div className={'crater'} />
					<div className={'crater'} />
					<div className={'crater'} />
					<div className={'crater'} />
					<div className={'crater'} />
					<div className={'rover '}>
						<div className={'body '} />
						<div className={'wheels '} />
						<div className={'trace'} />
					</div>
					<div className={'flag'}>404</div>
				</div>
			</React.Fragment>
		);
	}
}

ErrorPage.propTypes = propTypes;

export default ErrorPage;
