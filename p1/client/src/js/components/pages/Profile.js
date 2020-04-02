import React from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import DisplayTopHalfProfile from "../ProfileComps/DisplayUserDetails";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
import DropDownForm from "../reusable/DropDownForm";

const Profile = () => {



  const joinButtonCallback = () => {
    console.log(" callback from userform");
    // props.joinButtonCallback();
  };
  const forms = [<UserFormInput  key={"Edit Profile"} joinButtonCallback={joinButtonCallback()} prop={"hello from front"}/>, <UserProjectInput key={"Edit Projects"}/>, <CreateEventForm key={"Create Event"}/>]
  return (
    <div>
      <h1>Profile</h1>

      <div style={{ display: "flex" }}>
        <DisplayTopHalfProfile />
      </div>
      <div style={{ display: "flex" }}>
        {forms.map((form, index) => (
            <DropDownForm form={form} joinButtonCallback={joinButtonCallback} index={index} />

            
        ))}
        {/* <UserFormInput />
        <UserProjectInput />
        <CreateEventForm /> */}
      </div>
    </div>
  );
};

export default Profile;
