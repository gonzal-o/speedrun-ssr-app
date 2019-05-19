import { connect } from 'react-redux';
import { fetchGame } from '../action/gamesActions';
import GameComponent from '../components/Game/GameComponent';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	game: state.game,
	noData: state.game.noData,
	gameData: state.game.gameData,
	isFetching: state.game.isFetching,
	runs: state.game.runs,
	playerInfo: state.game.playerInfo,
	videoUrl: state.game.videoUrl,
});

const mapDispatchToProps = dispatch => ({
	fetchGame: id => dispatch(fetchGame(id)),
});

const GamesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GameComponent);

export default GamesContainer;
