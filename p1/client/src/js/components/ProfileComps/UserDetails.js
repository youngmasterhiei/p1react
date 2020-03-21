import React from "react";
// import PropTypes from 'prop-types';

const UserDetails = props => {
  // console.log(props.data)
  const propData = Object.values(props.data);
  console.log(propData);
  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {propData.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
