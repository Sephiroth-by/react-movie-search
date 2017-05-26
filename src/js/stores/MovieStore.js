var AppDispatcher = require('../dispatcher/AppDispatcher');
var MoviesAPI = require('../utils/MoviesAPI');
var EventEmitter = require('events').EventEmitter;
var MovieConstants = require('../constants/MovieConstants');
var _ = require('underscore');

var _movies = [];

var MovieStore = _.extend({}, EventEmitter.prototype, {

    setMovieResults: function (movies) {
        _movies = movies;
    },

    getMovieResults: function () {
        return _movies;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {

        case MovieConstants.SEARCH_MOVIES:
            MoviesAPI.searchMovie(action.movie);
            break;

        case MovieConstants.RECEIVE_MOVIE_RESULTS:
            MovieStore.setMovieResults(action.movies);
            break;
    }

    MovieStore.emitChange();

    return true;

});

module.exports = MovieStore;