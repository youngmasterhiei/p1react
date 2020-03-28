import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchEvents from "./SearchEvents";
import axios from "axios";
import EventList from "./EventList";

class EventsDisplayParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{}]
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/auth/api/events")
      .then(res => {
        this.setState({
          events: res.data
        });
        // console.log(res)
      })
      .catch(error => {
        console.log(error.events);
      });
  }

  dataTest() {
    console.log("hello from datatest");
    axios
      .get("http://localhost:5000/auth/api/events")
      .then(res => {
        this.setState({
          events: res.data
        });
        // console.log(res)
      })
      .catch(error => {
        console.log(error.events);
      });
  }

  render() {
    // this.dataTest()
    // console.log(this.state)
    return (
      <div>
        <div>
          <SearchEvents />
        </div>

        <div>
          {this.state.events.map((data, i) => (
            <EventList key={i} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

EventsDisplayParent.propTypes = {};

export default EventsDisplayParent;
