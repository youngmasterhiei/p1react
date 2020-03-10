import React from "react";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/forum">Forum</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <div>
         <SignUpForm />
         <LoginForm />
      </div>

   
    </div>
  );
};

export default Navigation;
