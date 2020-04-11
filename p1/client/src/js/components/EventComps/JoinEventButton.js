import React, { useState } from "react";
import { API } from "../../../api";

const JoinEventButton = (props) => {
  const [buttonSwitch, setButtonSwitch] = useState(true);

  const getUserEvents = () => {
    API.getAttendingEventForUser({
      eventId: props.data.id,
      userId,
      successfulCb: (res) => {
        res.data[0].eventId === props.data.id
          ? setButtonSwitch(false)
          : setButtonSwitch(true);
      },
    });
  };

  getUserEvents();

  const joinEvent = (e) => {
    e.preventDefault();
    getUserEvents();
    props.joinButtonCallback();
    const eventSignUp = {
      eventTitle: props.data.title,
      eventId: props.data.id,
      userId: localStorage.getItem("token"),
    };
    API.signUpForEvent({ data: eventSignUp });
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
