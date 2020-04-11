import React, { Component } from "react";
import API from "../../../api";
import "../../../style/Event.css";
import JoinEventButton from "./JoinEventButton";
// used to turn event image into link to navigate to Display another users profile
import { Link } from "react-router-dom";

class EventInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //holds event data to display
      event: {},
      // attendee list
      attendees: [{}],
    };
  }
  // runs before component mounts
  componentWillMount() {
    // grabs only the query string from window location
    const queryString = window.location.search;
    //breaks string up into params obect
    const urlParams = new URLSearchParams(queryString);
    //looks through the object for specificed param
    const eventId = urlParams.get("eventid");
    // saves to local storage for later use
    localStorage.setItem("eventId", eventId);

    API.getEvents({
      eventId,
      successfulCb: (res) => this.setState({ event: res.data[0] }),
    });
    API.getUsersAttendingEvents({
      eventId,
      successfulCb: (res) => this.setState({ attendees: res.data }),
    });
  }

  render() {
    // destructures state
    const event = this.state.event;
    const attendees = this.state.attendees;

    return (
      <div>
        <h1>{event.title}</h1>
        <h3>{event.date}</h3>
        <h3>{event.time}</h3>
        <h3>{event.desc}</h3>
        <JoinEventButton data={event} />

        <ul>
          {/* map through attendees and print each out with their name being a link to their profile */}
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
