import React, { Component, Fragment } from "react";
import superagent from "superagent";

import SearchForm from "./search-form.js";
import SearchResults from "./search-results.js";
import Map from "./map.js";

import "../reset.css";
import "../App.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      view: "initial",
      location: "",
      locationData: {
        id: 1,
        search_query: "",
        formatted_query: "",
        latitude: "",
        longitude: "",
        created_at: null
      },
      resultsData: {
        weather: [{ forecast: "", time: "" }],
        movies: [
          {
            title: "",
            released_on: "",
            total_votes: "",
            average_votes: "",
            popularity: "",
            image_url: "",
            overview: ""
          }
        ],
        yelp: [{ url: "", name: "", rating: "", price: "", image_url: "" }],
        hiking: [
          {
            trail_url: "",
            name: "",
            location: "",
            length: "",
            condition_date: "",
            condition_time: "",
            conditions: "",
            stars: "",
            star_votes: "",
            summary: ""
          }
        ]
      }
    };
  }

  handleURLSubmit = url => {
    this.setState({
      url: url,
      view: this.state.view,
      location: this.state.location,
      locationData: this.state.locationData,
      resultsData: this.state.resultsData
    });
  };

  handleLocationSubmit = location => {
    superagent
      .get(`${this.state.url}/location?data=${location}`)
      .then(response => {
        this.setState({
          url: this.state.url,
          view: "results",
          location: location,
          locationData: response.body
        });
        superagent
          .get(`${this.state.url}/weather`)
          .query({ data: response.body })
          .then(results => {
            let newState = this.state;
            newState.resultsData.weather = results.body;
            this.setState(newState);
          })
          .then(() => {
            superagent
              .get(`${this.state.url}/movies`)
              .query({ data: response.body })
              .then(results => {
                let newState = this.state;
                newState.resultsData.movies = results.body;
                this.setState(newState);
              });
          })
          .then(() => {
            superagent
              .get(`${this.state.url}/yelp`)
              .query({ data: response.body })
              .then(results => {
                let newState = this.state;
                newState.resultsData.yelp = results.body;
                this.setState(newState);
              });
          })
          .then(() => {
            superagent
              .get(`${this.state.url}/trails`)
              .query({ data: response.body })
              .then(results => {
                let newState = this.state;
                newState.resultsData.hiking = results.body;
                this.setState(newState);
              });
          })
          .then(console.log("this.state: ", this.state));
      });
  };

  render() {
    if (this.state.view === "initial") {
      return (
        <Fragment>
          <SearchForm
            handleURLSubmit={this.handleURLSubmit}
            handleLocationSubmit={this.handleLocationSubmit}
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <SearchForm />
          <Map resultsData={this.state.locationData} />
          <SearchResults resultsData={this.state.resultsData} />
        </Fragment>
      );
    }
  }
}
