import React from "react";
// import PropTypes from 'prop-types';

const UserDetails = props => {
  // console.log(props.data)
  const fuckthis = Object.values(props.data);
  console.log(fuckthis);
  return (
    <div>
      <ul>
        {fuckthis.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
