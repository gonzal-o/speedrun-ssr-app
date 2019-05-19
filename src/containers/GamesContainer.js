import { connect } from 'react-redux';
import GamesComponent from '../components/Games/GamesComponent';
import { fetchGames } from '../action/gamesActions';

const mapStateToProps = state => ({ games: state.games });

const mapDispatchToProps = dispatch => ({
	fetchGames: sortGames => dispatch(fetchGames(sortGames)),
});

const GamesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GamesComponent);

export default GamesContainer;
