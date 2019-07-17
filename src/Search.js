import React, { Component, Fragment } from "react";

import "./reset.css";
import "./App.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // // Method to lower count
  // decrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    return (
      <Fragment>
        <form>
          <input />
          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}

{
  /* <p id="counter">{this.state.count}</p>
        <button class="buttons" onClick={this.decrement}>
          {" "}
          -{" "}
        </button>
        <button class="buttons" onClick={this.increment}>
          {" "}
          +{" "}
        </button> */
}

export default Search;
