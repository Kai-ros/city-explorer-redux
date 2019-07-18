import React, { Component, Fragment } from "react";
import superagent from "superagent";

import "../reset.css";
import "../App.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationValue: ""
    };
  }

  handleChange = event => {
    this.setState({ locationValue: event.target.value });
  };

  handleSubmit = event => {
    alert("A location was submitted: " + this.state.locationValue);
    event.preventDefault();
    // superagent.get("https://swapi.co/api/people/").then(response => {
    //   console.log(response.body.results);
    //   this.setState({ results: response.body.results });
    // });
  };

  render() {
    return (
      <Fragment>
        <form>
          <input
            type="text"
            value={this.state.locationValue}
            onChange={this.handleChange}
          />
          <button class="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

/* <p id="counter">{this.state.count}</p> */
