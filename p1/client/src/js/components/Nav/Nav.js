import React from "react";
import DisplayLoginSignup from "../LoginComps/DisplayLoginSignup"

import { Link } from "react-router-dom";


const Navigation = (props) => {
  console.log(props)
  
  return (
    <div className="navBar">
   
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/Profile">Profile</Link>
      <div>
       <DisplayLoginSignup storeToken = {props.storeToken} />
      </div>
    </div>
  );
};

export default Navigation;
