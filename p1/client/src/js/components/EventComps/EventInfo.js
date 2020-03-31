import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchEvents from "./SearchEvents";
import axios from "axios";
import EventList from "./EventList";
import "../../../style/Event.css";
import JoinEventButton from "./JoinEventButton";

class EventInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        event : {}
    };
  }

  componentWillMount() {

    // console.log(this.props.match.params)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventId = urlParams.get("eventid")
    localStorage.setItem("eventId", eventId)
    axios
      .get("http://localhost:5000/auth/api/event/" + eventId)
      .then(res => {


        this.setState({
            event : res.data[0]
        });
      })
      .catch(error => {
        console.log(error.events);
      });

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

    return (
      <div>
          <h1>{event.title}</h1>
          <h3>{event.date}</h3>
          <h3>{event.time}</h3>
          <h3>{event.desc}</h3>
          <JoinEventButton data={event} />


      </div>
    );
  }
}

EventInfo.propTypes = {};

export default EventInfo;
