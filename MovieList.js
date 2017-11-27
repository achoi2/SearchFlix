import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { Button } from 'bloomer';

export default class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }
    
    render() {
        const { movies, handleLoadMoreClick } = this.props;
        let filteredMovies = this.props.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.
                search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
            <input type="text" 
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filteredMovies.map(movie => <MovieCard key={movie.id} title={movie.title} />)}  
                    <Button isloading isColor="info" onClick={(e) => handleLoadMoreClick(e)}> Load More </Button>  
                </ul>
            </div>
        )
    }
}