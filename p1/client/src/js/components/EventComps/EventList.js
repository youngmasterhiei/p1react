import React from "react";
import { Link } from "react-router-dom";
import JoinEventButton from "./JoinEventButton";

const EventList = props => {
  const eventId = props.data.id;

  const setEventId = eventId => {
    localStorage.setItem("eventId", eventId);
  };

  const joinButtonCallback = () => {
    console.log("EventList callback");
    props.joinButtonCallback();
  };

  return (
    <div
      id={`card-${props.data.index}`}
      className={
        props.data.index === props.activeCard ? "card activeCard" : "card"
      }
    >
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to={"/displayevent?eventid=" + eventId} onClick={setEventId()}>
            {" "}
            <img
              style={{ width: "200px", height: "20%", minWidth: "150px" }}
              src={props.data.imagePath}
            />
          </Link>
        </li>
        <li>
          {props.data.date} @ {props.data.time}
        </li>

        <li style={{ fontWeight: "bold" }}>{props.data.title}</li>
        <li style={{}}>{props.data.desc}</li>
        <li>
          <JoinEventButton
            data={props.data}
            joinButtonCallback={joinButtonCallback}
          />
        </li>
      </ul>
    </div>
  );
};

EventList.propTypes = {};

export default EventList;
