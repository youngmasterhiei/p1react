import React from "react";
import DisplayUserDetails from "../ProfileComps/DisplayUserDetails";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      <h1>Profile</h1>
      <DisplayUserDetails />
    </div>
  );
};

export default Profile;
