var React = require("react");

var MovieActions = require('../actions/MovieActions');
var MovieStore = require('../stores/MovieStore')

var Search = require("./Search");
var MovieList = require("./MovieList");

function getState() {
    return {
        movies: MovieStore.getMovieResults()
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = getState();

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        MovieStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        MovieStore.removeChangeListener(this._onChange);
    }

    render() {
        if (this.state.movies.length > 0) {
            var movieList = <MovieList movies={this.state.movies}/>
        }
        else {
            var movieList = "";
        }
            return (
                <div>
                    <Search />
                    {movieList}
                </div>
      )
    }

    _onChange() {
        this.setState(getState());
    }

}

module.exports = App;