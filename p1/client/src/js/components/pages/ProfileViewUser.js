import React from "react";
import ViewUserCard from "../ProfileComps/ViewUserCard";

const Profile = (props) => {
  return (
    <div>
      <h1>Profile</h1>

      <div style={{ display: "flex" }}>
        <ViewUserCard key={props.location.search} />
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Profile;
