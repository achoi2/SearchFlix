import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { Button } from 'bloomer';
import { Input } from 'bloomer';

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
                <Input type="text" isSize='medium' isColor='dark' placeholder='Movies'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filteredMovies.map(movie => <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path} overview={movie.overview} date={movie.release_date} vote={movie.vote_count} />)}  
                    <Button isloading isColor="info" onClick={(e) => handleLoadMoreClick(e)}> Load More </Button>  
                </ul>
            </div>
        )
    }
}