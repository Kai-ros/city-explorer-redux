import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class HikingResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section>
          <h3>Results from the Hiking Project API</h3>
          <ul className="trails-results">
            {this.props.resultsData.map(element => {
              return (
                <div key={Math.random()}>
                  <p>
                    Hike Name: <a href={element.trail_url}>{element.name}</a>,
                    Location: {element.location}, Distance: {element.length}{" "}
                    miles
                  </p>
                  <p>
                    On {element.condition_date} at {element.condition_time},
                    trail conditions were reported as: {element.conditions}
                  </p>
                  <p>
                    This trail has a rating of {element.stars} stars (out of{" "}
                    {element.star_votes} votes)
                  </p>
                  <p>{element.summary}</p>
                </div>
              );
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}
