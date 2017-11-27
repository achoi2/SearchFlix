import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { Button } from 'bloomer';

export default class MovieList extends Component {
    render() {
        const { movies, handleLoadMoreClick } = this.props;
        
        return (
            <div>
              {movies.map(movie => <MovieCard key={movie.id} title={movie.title} />)}  
              <Button isloading isColor="info" onClick={(e) => handleLoadMoreClick(e)}> Load More </Button>  
            </div>
        )
    }
}