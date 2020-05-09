import {SEARCH_MOVIE} from './types';
import {FETCH_MOVIES} from './types'
import axios from 'axios'
import {APIkey} from '../APIkey'
 
export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  })
}
export const fetchMovies = text => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIkey}&s=${text}`)
    .then(res => {
      dispatch({type: FETCH_MOVIES, payload: res.data.Search})
    })
    .catch(err => console.log(err))
}