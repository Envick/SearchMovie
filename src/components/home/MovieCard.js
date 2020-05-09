import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const {movie} = this.props
    return (
        <div className="card">
          <img src={movie.Poster} alt=""/>
          <h5>{movie.Title} - {movie.Year}</h5>
          <a href="#">Go to the film</a>
        </div>
    )
  }
}
