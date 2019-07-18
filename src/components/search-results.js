import React, { Component, Fragment } from "react";

import Result from "./result.js";

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
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </Fragment>
    );
  }
}
