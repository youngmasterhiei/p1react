import React from "react";
import ViewUserCard from "../ProfileComps/ViewUserCard";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>

      <div style={{ display: "flex" }}>
        <ViewUserCard />
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Profile;
