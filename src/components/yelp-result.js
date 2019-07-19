import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class YelpResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="yelp-container">
          <h3>Results from the Yelp API</h3>
          <ul className="yelp-results">
            {this.props.resultsData.map(element => {
              return (
                <li key={Math.random()}>
                  <a href={element.url}>{element.name}</a>
                  <p>
                    The average rating is {element.rating} out of 5 and the
                    average cost is {element.price} out of 4
                  </p>
                  <img src={element.image_url} alt="" />
                </li>
              );
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}
