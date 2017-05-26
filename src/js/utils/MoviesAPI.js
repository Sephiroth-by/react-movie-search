var MovieActions = require("../actions/MovieActions");

module.exports = {

    searchMovie: function (movie) {
        $.ajax({
            url: ("https://yts.ag/api/v2/list_movies.json?query_term=" + encodeURI(movie)),
            dataType: 'json',
            cache: false,
            success: function (data) {
                if(data.data.movie_count > 0)
                    MovieActions.receiveMovies(data.data.movies);
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            }.bind(this)
        });
    }
};