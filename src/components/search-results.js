import React, { Component, Fragment } from "react";

import WeatherResult from "./weather-result.js";
import MoviesResult from "./movies-result.js";
import YelpResult from "./yelp-result.js";
import HikingResult from "./hiking-result.js";

import "../reset.css";
import "../App.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="column-container">
          <WeatherResult resultsData={this.props.resultsData.weather} />
          <YelpResult resultsData={this.props.resultsData.yelp} />
          <section>EVENTS TBD</section>
          <MoviesResult resultsData={this.props.resultsData.movies} />
          <HikingResult resultsData={this.props.resultsData.hiking} />
        </div>
      </Fragment>
    );
  }
}
