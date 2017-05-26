var React = require("react");

var MovieActions = require('../actions/MovieActions');
var MovieStore = require('../stores/MovieStore')

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        var value = e.target.value;
        this.setState({
            value: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        var value = this.state.value;
        if (value) {
            MovieActions.searchMovies(value);
        }
        this.setState({
            value: ""
        });
    }

    render() {
        return (
                 <div className="search-form">
                    <h1 className="text-center">
                        Search For A Movie
                    </h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter a movie title" value={this.state.value} onChange={this.onChange} />
                        </div>
                        <button className="btn btn-primary btn-block">
                            Search Movies
                        </button>
                    </form>
                 </div>
            )
    };
}

module.exports = Search;