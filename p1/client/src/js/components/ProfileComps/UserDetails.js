import React from "react";
// import PropTypes from 'prop-types';

const UserDetails = props => {
  return (
    <div>
      <li>{props.data[1]}</li>
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
