import React from 'react';
import { movies } from '../data';

const Movies = () => {
  renderMovie = (movie) => {
    return <div>
      <span>{movie.title}</span>
      <span>{movie.time}</span>
      <ul>{movie.genres.map(g => <li>g</li>)}</ul>
    </div>
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(m => this.renderMovie(m))}
    </div>
  );
};

export default Movies;
