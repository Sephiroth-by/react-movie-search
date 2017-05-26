var React = require('react');

var Movie = require("./Movie");

class MovieList extends React.Component {
    render() {
        var movies = this.props.movies;
        return (
                <div>
                    <h3 className="text-center">Results</h3>
                    {
                        movies.map(function (movie, i) {
                            return (
                                <Movie movie={movie} key={movie.id} />)
                        })
                    }
                </div>
        );
    }
};

module.exports = MovieList;
