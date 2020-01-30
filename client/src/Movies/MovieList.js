import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    console.log('movies did mount')
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  componentDidUpdate() {
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => this.setState({ movies: res.data }))
    .catch(err => console.log(err.response));
}

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <MovieCard movie={movie} />
      </Link>
          {/* <Route path="/update-movie/:id" component={UpdateMovie} /> */}
    </div>
    
  );
}
