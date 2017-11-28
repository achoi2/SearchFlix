import React, { Component } from "react";
import { Box, Image, Columns, Column, Button } from "bloomer";
import "./MovieCard.css";

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return { isShow: !prevState.isShow };
    });
  }

  render() {
    let buttonText;
    let movieDetailText;
    if (this.state.isShow) {
      buttonText = <h1> Hide </h1>;
    } else {
      buttonText = <h1> Show </h1>;
    }

    if (this.state.isShow) {
      movieDetailText = (
        <Column>
          {this.props.title} <br />
          {this.props.overview} <br />
          {this.props.date} <br />
          {this.props.vote}
        </Column>
      );
    } else {
      movieDetailText = "";
    }

    return (
      <Box className="MovieCard-Box">
        <Columns>
          <Button onClick={this.handleClick}> {buttonText} </Button>
          <Column>
            <img
              style={{ height: "300px" }}
              src={"https://image.tmdb.org/t/p/w342" + this.props.poster}
            />
          </Column>
            {movieDetailText}
        </Columns>
      </Box>
    );
  }
}
