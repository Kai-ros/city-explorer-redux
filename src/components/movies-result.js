import React, { Component, Fragment } from "react";

import "../reset.css";
import "../App.css";

export default class MoviesResult extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="movie-container">
          <h3>Results from The Movie DB API</h3>
          <ul className="movies-results">
            {this.props.resultsData.map(element => {
              return (
                <li key={Math.random()}>
                  <p>
                    <span>{element.title}</span> was relased on{" "}
                    {element.released_on}. Out of {element.total_votes} total
                    votes, {element.title} has an average vote of{" "}
                    {element.average_votes} and a popularity score of{" "}
                    {element.popularity}.
                  </p>
                  <img src={element.image_url} alt="" />
                  <p>{element.overview}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}
