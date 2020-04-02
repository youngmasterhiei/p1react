import React, { Component } from "react";
// brings in axios for get / post
import axios from "axios";
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
      attendees: [{}]
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
    // call db to get a specific event's details
    axios
      // api route
      .get("http://localhost:5000/auth/api/event/" + eventId)
      .then(res => {
        // saves to state
        this.setState({
          event: res.data[0]
        });
      })
      .catch(error => {
        console.log(error.events);
      });
      // gets all users attending the event
    axios
      .get("http://localhost:5000/auth/api/userAttendingEvents/" + eventId)
      .then(res => {
        this.setState({
          attendees: res.data
        });

      })
      .catch(error => {
        console.log(error.events);
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
