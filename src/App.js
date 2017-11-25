import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import { Container } from "bloomer";
import MovieList from "./MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      page: 1
    };
  }
  
 sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  } 
    
  async fetchMovies(page) {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=9710505071f8a3028ae8d5341ecf2f53?page=${page}`;
    const results = await fetch(url);
    const data = await results.json();
    return data.results;
  }
  
  async componentDidMount() {
    this.movieResults = await this.fetchMovies(this.state.page);  
    this.setState({
      movies: this.movieResults,
      loading: false
    });
  }
  
  async loadMore() {
    const page = this.state.page + 1;
    const newMovies = await this.fetchMovies(page);
    this.movieResults = this.movieResults.concat(newMovies);
    this.setState({
      page,
      movies: this.movieResults
    })
  }
   
  render() {
    let content;
    if (this.state.loading) {
      content = <h1> I am loading </h1>
    } else {
      content = <MovieList handleLoadMoreClick={(e) => this.loadMore(e)} movies={this.state.movies}/>
    }
    
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Container>{ content }</Container> 
        </div>
      </Container>
    );
  }
}

export default App;
