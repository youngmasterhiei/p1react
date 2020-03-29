import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchEvents from "./SearchEvents";
import axios from "axios";
import EventList from "./EventList";
import "../../../style/Event.css";

class EventInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        event : {}
    };
  }

  componentWillMount() {



    const userId = localStorage.getItem("token");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventId = urlParams.get("eventid")
    console.log(eventId)
    axios
      .get("http://localhost:5000/auth/api/event/" + eventId)
      .then(res => {

        console.log(res)

        this.setState({
            event : res.data[0]
        });
      })
      .catch(error => {
        console.log(error.events);
      });
  }



  render() {
const event = this.state.event
    console.log(this.state.event)
    return (
      <div>
          <h1>{event.title}</h1>
          <h3>{event.date}</h3>
          <h3>{event.time}</h3>
          <h3>{event.desc}</h3>


      </div>
    );
  }
}

EventInfo.propTypes = {};

export default EventInfo;
