var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieConstants = require('../constants/MovieConstants');

var MovieActions = {

    searchMovies: function (movie) {
        AppDispatcher.handleAction({
            actionType: MovieConstants.SEARCH_MOVIES,
            movie: movie
        })
    },

    receiveMovies: function (movies) {
        AppDispatcher.handleAction({
            actionType: MovieConstants.RECEIVE_MOVIE_RESULTS,
            movies: movies
        })
    }

};

module.exports = MovieActions;