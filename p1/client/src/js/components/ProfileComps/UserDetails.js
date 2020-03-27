import React from "react";
import {connect} from "react-redux"
import {useDispatch } from "react-redux";
import {getProfile} from "../../../redux/actions/index";
// import PropTypes from 'prop-types';

const UserDetails = props => {
  // console.log(props.data)
  
  const propData = Object.values(props.data);

          // console.log("user profile from redux");
        // // const usersProfile = useSelector(state => state.profile);
    props.passedFunction(props.data)
        // console.log(usersProfile);
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
