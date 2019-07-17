import React, { Component, Fragment } from "react";

import "./reset.css";
import "./App.css";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <img src="https://staticmapmaker.com/img/google@2x.png" alt="" />
      </Fragment>
    );
  }
}

export default Map;
