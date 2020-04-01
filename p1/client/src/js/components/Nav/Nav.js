import React from "react";
import DisplayLoginSignup from "../LoginComps/DisplayLoginSignup"
import { withRouter } from 'react-router-dom';

import { Link} from "react-router-dom";
import DisplayNotifications from "../Notifications/DisplayNotifications";

const notifications = <notifications key={"Edit Profile"} />


const Navigation = (props) => {
  
  return (
    <div className="navBar">
      <div>
      </div>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/Profile">Profile</Link>
      <div>
       <DisplayLoginSignup storeToken = {props.storeToken} history = {props.history} />
      </div>

    </div>
  );
};

export default withRouter(Navigation);
