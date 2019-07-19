import React, { Component, Fragment } from "react";

import Header from "./header.js";
import Main from "./main.js";

import "../reset.css";
import "../App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backEndUrl: "",
      REACT_APP_GEOCODE_API_KEY: "",
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    };
  }

  getAPIKey = value => {
    this.setState({ REACT_APP_GEOCODE_API_KEY: value });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
  }
}
