import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";


// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

const EventList = props => {
  //   console.log(props);
  //   const propData = Object.values(props);
  const propData = Object.values(props.data);
  const eventId = props.data.id;

  const setEventId = eventId => {
    console.log("hello");
    localStorage.setItem("eventId", eventId);
  };

  const joinEvent = e => {
    e.preventDefault();
    // localStorage.getItem("token")
    // console.log(this.state);
    const eventSignUp = {
        eventTitle: props.data.title,
        eventId: props.data.id,
        userId: localStorage.getItem("token")
    }
    axios({
      method: "post",
      url: "http://localhost:5000/auth/api/joinevent",
      data: eventSignUp
    })

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div
      id={`card-${props.data.index}`}
      className={
        props.data.index === props.activeCard ? "card activeCard" : "card"
      }
      //   style = {{justifyContent: "center" }}
    >
      <ul style={{ listStyle: "none" }}>
        <li>
          {/* <a href={"http://localhost:5000/auth/api/events/" + eventId }> */}

          <Link to={"/displayevent?eventid=" + eventId} onClick={setEventId()}>
            {" "}
            <img
              style={{ width: "200px", height: "20%", minWidth: "150px" }}
              src={props.data.imagePath}
            />
          </Link>
          {/* </a> */}
        </li>
        <li>
          {props.data.date} @ {props.data.time}
        </li>

        <li style={{ fontWeight: "bold" }}>{props.data.title}</li>
        <li style={{}}>{props.data.desc}</li>
        <li>
          {" "}
          <button onClick={joinEvent}>Sign Up</button>
        </li>
      </ul>
      {/* <ul style={{ listStyle: "none" }}>
        {Object.keys(props.data).map((keyName, i) => (
          <li key={i}>
            <img
              style={{ width: "20%", height: "20%" }}
              src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/03/complete-guide-threads-nodejs.jpg?fit=730%2C486&ssl=1"
            ></img>
            <span>
              {keyName}: {props.data[keyName]}
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

EventList.propTypes = {};

export default EventList;
