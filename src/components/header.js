import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events,
          restaurants, movies filmed there, and more!
        </p>
      </Fragment>
    );
  }
}
