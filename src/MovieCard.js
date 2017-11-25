import React, { Component } from "react"
import { Box } from "bloomer";
import "./MovieCard.css";

export default class MovieCard extends Component {
    render() {
        return (
            <Box className="MovieCard-Box">
                { this.props.title }
            </Box>    
        )
    }
}