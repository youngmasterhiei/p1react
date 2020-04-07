import React, { useEffect, useState, Component } from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import DisplayUserDetails from "../ProfileComps/DisplayUserDetails";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
import DropDownForm from "../reusable/DropDownForm";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(0);

  const joinButtonCallback = stateFromUser => {
    // console.log(userInfo);
    // console.log("fuck fuck fuck");
    // console.log(stateFromUser);
    // updateInfoCard(stateFromUser);
    // props.joinButtonCallback();
  };

  const updateInfoCard = stateFromUser => {};
  // const forms = [
  //   <UserFormInput
  //     key={"Edit Profile"}
  //     joinButtonCallback={joinButtonCallback}
  //     prop={"hello from front"}
  //   />,
  //   <UserProjectInput key={"Edit Projects"} />,
  //   <CreateEventForm key={"Create Event"} />
  // ];

  useEffect(
    stateFromUser => {
      setUserInfo(stateFromUser);
    },
    [userInfo]
  );

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
