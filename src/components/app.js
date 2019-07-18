import React, { Component, Fragment } from "react";

import Header from "./header.js";
import Main from "./main.js";

import "../reset.css";
import "../App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
  }
}
