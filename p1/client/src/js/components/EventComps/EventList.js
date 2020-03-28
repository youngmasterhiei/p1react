import React from "react";
import PropTypes from "prop-types";

const EventList = props => {
//   console.log(props);
//   const propData = Object.values(props);
const propData = Object.values(props.data);
console.log(propData)
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
      {Object.keys(props.data).map((keyName, i) => (
    <li key={i}>
        <span >{keyName}: {props.data[keyName]}</span>
    </li>
))}
      </ul>
    </div>
  );
};

EventList.propTypes = {};

export default EventList;
