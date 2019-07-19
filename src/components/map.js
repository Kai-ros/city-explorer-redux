import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div
          id="map"
          className="hide"
          src=""
          alt="Map of search query"
          className="mapouter"
        >
          <div className="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${
                this.props.resultsData.formatted_query
              }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
            <a href="https://www.pureblack.de" />
          </div>
        </div>
      </Fragment>
    );
  }
}
