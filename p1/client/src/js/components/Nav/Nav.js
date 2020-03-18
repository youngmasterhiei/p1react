import React from "react";
import DisplayLoginSignup from "../LoginComps/DisplayLoginSignup"

import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div className="navBar">
   
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/Profile">Profile</Link>
      <div>
       <DisplayLoginSignup />
      </div>
    </div>
  );
};

export default Navigation;
