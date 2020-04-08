import React, { useEffect, useState, Component } from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import DisplayUserDetails from "../ProfileComps/DisplayUserDetails";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
import DropDownForm from "../reusable/DropDownForm";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      <h1>Profile</h1>

      <DisplayUserDetails />
      {/* <div style={{ display: "flex" }}>
        {forms.map((form, index) => (
          <DropDownForm
            form={form}
            joinButtonCallback={joinButtonCallback}
            index={index}
          />
        ))}
        {/* <UserFormInput />
        <UserProjectInput />
        <CreateEventForm /> */}
    </div>
  );
};

export default Profile;
