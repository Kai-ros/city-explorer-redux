import React, { Component, Fragment } from "react";

import Search from "./Search.js";
import Map from "./Map.js";
import Result from "./Result.js";

import "./reset.css";
import "./App.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment id="main">
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Fragment>
    );
  }
}

export default Main;
