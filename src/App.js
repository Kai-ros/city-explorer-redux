import React, { Component, Fragment } from "react";

import Header from "./Header.js";
import Main from "./Main.js";

import "./reset.css";
import "./App.css";

class App extends Component {
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

export default App;
