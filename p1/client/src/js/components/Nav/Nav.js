import React from "react";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div className="navBar">
   
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/Profile">Profile</Link>
      <div>
        <SignUpForm />
        <LoginForm />
      </div>
    </div>
  );
};

export default Navigation;
