var React = require("react");

class Movie extends React.Component {

    render() {
        return (
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img className="thumbnail" src={this.props.movie.large_cover_image} alt="movie poster" />
                    </div>
                    <div className="col-md-8">
                        <h4>
                            {this.props.movie.title}
                        </h4>
                        <ul className="list-group">
                             <li className="list-group-item">
                                {this.props.movie.summary}
                             </li>
                            <li className="list-group-item">
                                Year Released: {this.props.movie.year}
                            </li>
                            <li className="list-group-item">
                                IMDB Rating: {this.props.movie.rating} / 10
                            </li>
                             <li className="list-group-item">
                                 Running Time: {this.props.movie.runtime} mins
                             </li>
                        </ul>
                            <a className="btn btn-primary" href={this.props.movie.url}>
                                View
                            </a>
                    </div>
                </div>
            </div>
            );
    }
}

module.exports = Movie;