import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "initial",
      locationValue: "",
      urlValue: ""
    };
  }

  handleURLChange = event => {
    this.setState({
      view: this.state.view,
      locationValue: this.state.locationValue,
      urlValue: event.target.value
    });
  };

  handleURLSubmit = event => {
    event.preventDefault();
    this.props.handleURLSubmit(this.state.urlValue);

    this.setState({
      view: "location",
      locationValue: this.state.locationValue,
      url: this.state.urlValue
    });
  };

  handleLocationChange = event => {
    this.setState({
      view: this.state.view,
      locationValue: event.target.value,
      url: this.state.url
    });
  };

  handleLocationSubmit = event => {
    event.preventDefault();
    this.props.handleLocationSubmit(this.state.locationValue);

    this.setState({
      view: "location",
      locationValue: this.state.locationValue,
      url: this.state.urlValue
    });
  };

  render() {
    if (this.state.view === "initial") {
      return (
        <Fragment>
          <form>
            <input
              type="text"
              onChange={this.handleURLChange}
              value={this.state.urlValue}
            />
            <button className="button" onClick={this.handleURLSubmit}>
              Submit
            </button>
          </form>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <form>
            <input
              type="text"
              onChange={this.handleLocationChange}
              value={this.state.locationValue}
            />
            <button className="button" onClick={this.handleLocationSubmit}>
              Submit
            </button>
          </form>
        </Fragment>
      );
    }
  }
}

/* <p id="counter">{this.state.count}</p> */
