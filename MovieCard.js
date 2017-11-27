import React, { Component } from "react"
import { Box, Image } from "bloomer";
import "./MovieCard.css";

export default class MovieCard extends Component {
    render() {
        
        return (
            <Box className="MovieCard-Box">
            <Image isSize='small' src={"https://image.tmdb.org/t/p/w342" + this.props.poster}/>   
                { this.props.title }
            </Box>    
        )
    }
}