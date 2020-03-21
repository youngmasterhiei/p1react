import React from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import DisplayTopHalfProfile from "../ProfileComps/DisplayUserDetails";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
  
      <div style={{display: "flex"}}>
      <DisplayTopHalfProfile />
      </div>
      <div style={{display: "flex"}}>
        <UserFormInput />
        <UserProjectInput />
        <CreateEventForm />
      </div>
    </div>
  );
};

export default Profile;
