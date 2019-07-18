import React, { Component, Fragment } from "react";

import SearchForm from "./search-form.js";
import SearchResults from "./search-form.js";
import Map from "./map.js";

import "../reset.css";
import "../App.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment id="main">
        <SearchForm />
        <Map />
        <SearchResults />
      </Fragment>
    );
  }
}
