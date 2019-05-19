import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../common';
import GamesFilteredList from './GamesFilteredListComponent';
import SearchComponent from '../Search/SearchComponent';

const propTypes = {
	fetchGames: PropTypes.func.isRequired,
	games: PropTypes.shape({
		isFetching: PropTypes.bool.isRequired,
		gamesData: PropTypes.array.isRequired,
	}),
};

class GamesComponent extends Component {
	state = {
		searchTerm: '',
		filterdGamesList: [],
		searching: false,
		sortGames: false,
	};

	componentDidMount() {
		const { fetchGames } = this.props;
		const { sortGames } = this.state;
		fetchGames(sortGames);
	}

	filterIt = (game, searchTerm) => {
		return (
			game.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
			game.id.includes(searchTerm)
		);
	};

	handleChange = e => {
		const { gamesData } = this.props.games;
		const searchTerm = e.target.value;
		const filterdGamesList = gamesData.filter(game =>
			this.filterIt(game, searchTerm)
		);
		this.setState({ searchTerm, searching: true, filterdGamesList });
	};

	handleClickSortGames = async () => {
		const { fetchGames } = this.props;
		const { sortGames } = this.state;
		this.setState({ sortGames: !sortGames });
		fetchGames(!sortGames);
	};

	render() {
		const {
			games: { isFetching, gamesData },
		} = this.props;
		const { filterdGamesList, searching, sortGames } = this.state;

		if (isFetching) {
			return <Loading />;
		}

		return (
			<React.Fragment>
				<div className="container">
					<div className="games-searchbar">
						<SearchComponent search={this.handleChange} />
						<h4>Sort by: </h4>
						<button
							id={'sort-btn'}
							className={'sort-btn'}
							style={sortGames ? { backgroundColor: 'blue' } : {}}
							onClick={this.handleClickSortGames}>
							Creation Date
						</button>
					</div>
					<div className="games-container">
						<GamesFilteredList
							searching={searching}
							gamesData={gamesData}
							filterdGamesList={filterdGamesList}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

GamesComponent.propTypes = propTypes;

export default GamesComponent;
