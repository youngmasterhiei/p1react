import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchEvents from "./SearchEvents";
import axios from "axios";
import EventList from "./EventList";
import "../../../style/Event.css";
import JoinEventButton from "./JoinEventButton";
import { Link } from "react-router-dom";


class EventInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {},
      attendees: [{}]
    };
  }

  componentWillMount() {
    // console.log(this.props.match.params)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const eventId = urlParams.get("eventid");
    localStorage.setItem("eventId", eventId);
    axios
      .get("http://localhost:5000/auth/api/event/" + eventId)
      .then(res => {
        this.setState({
          event: res.data[0]
        });
        console.log(this.state.event.id);
      })
      .catch(error => {
        console.log(error.events);
      });

    axios
      .get("http://localhost:5000/auth/api/userAttendingEvents/" + eventId)
      .then(res => {
        this.setState({
          attendees: res.data
        });
        // res.data[0].eventId === props.data.id
        //   ? setButtonSwitch(false)
        //   : setButtonSwitch(true);
      })
      .catch(error => {
        console.log(error.events);
      });
  }

  render() {
    const event = this.state.event;
    // const attendees = this.state.attendees
    const attendees = this.state.attendees;

    // attendees.forEach(data =>
    //   {
    //   return <li>{data.username}</li>
    // });
    console.log(attendees);
    return (
      <div>
        <h1>{event.title}</h1>
        <h3>{event.date}</h3>
        <h3>{event.time}</h3>
        <h3>{event.desc}</h3>
        <JoinEventButton data={event} />

        <ul>
          {attendees.map((data, i) => (
                     <Link to={"/displayprofile?userId=" + data.userId}>
                     <li>{data.username}</li>
                     </Link>
          ))}
        </ul>
      </div>
    );
  }
}

EventInfo.propTypes = {};

export default EventInfo;
