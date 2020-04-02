import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { loggedIn } from "./redux/actions/index";





const JoinEventButton = props => {
  const [buttonSwitch, setButtonSwitch] = useState(true);

  const getUserEvents = () => {
    const userId = localStorage.getItem("token");
    axios
      .get(
        "http://localhost:5000/auth/api/userAttendingEvents/" +
          userId +
          "/" +
          props.data.id
      )
      .then(res => {
        res.data[0].eventId === props.data.id
          ? setButtonSwitch(false)
          : setButtonSwitch(true);
      })
      .catch(error => {
        console.log(error.events);
      });
  };
  getUserEvents();

  const joinEvent = e => {
    e.preventDefault();
    getUserEvents();
    props.joinButtonCallback();
    const eventSignUp = {
      eventTitle: props.data.title,
      eventId: props.data.id,
      userId: localStorage.getItem("token")
    };
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
    <div>
      {buttonSwitch === false ? (
        <h3>Attending</h3>
      ) : (
        <button onClick={joinEvent}>signup </button>
      )}
    </div>
  );


};

JoinEventButton.propTypes = {};

export default JoinEventButton;
