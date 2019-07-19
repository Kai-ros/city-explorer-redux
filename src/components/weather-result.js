import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class WeatherResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section>
          <h3>Results from the Dark Sky API</h3>
          <ul className="weather-results">
            {this.props.resultsData.map((element, index) => {
              return (
                <li key={index}>
                  The forecast for {element.time} is: {element.forecast}
                </li>
              );
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}
