import React, { Component } from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import styles from './SearchForm.module.css'
import {searchMovie, fetchMovies} from '../../actions/searchActions'


export class SearchForm extends Component {

  onChange = e => {
    this.props.searchMovie(e.target.value)
  }

  onClick = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text)
  }


  render() {
    return (
      <div className={styles.searchContainer}>
        <FormControl>
          <InputLabel htmlFor="my-input">Search Movies, TV series...</InputLabel>
          <Input 
            id="my-input" 
            aria-describedby="my-helper-text" 
            onChange={this.onChange}
          />
          <FormHelperText id="my-helper-text">We will give you the best movies you want </FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary" className={styles.searchButton} type="submit" onClick={this.onClick}>Search the movies</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
})
export default connect(mapStateToProps, {searchMovie, fetchMovies})(SearchForm);