import { list } from 'mocha/lib/reporters/base.js';
import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(Movie => <MovieCard title={Movie.title} IMDBRating={Movie.IMDBRating} genres={Movie.genres} poster={Movie.poster} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }                                                                  
}
