import React from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import DisplayTopHalfProfile from "../ProfileComps/DisplayUserDetails";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
import DropDownForm from "../reusable/DropDownForm";
const forms = [<UserFormInput key={"Edit Profile"} />, <UserProjectInput key={"Edit Projects"}/>, <CreateEventForm key={"Create Event"}/>]

const Profile = () => {
    console.log(forms)
  return (
    <div>
      <h1>Profile</h1>

      <div style={{ display: "flex" }}>
        <DisplayTopHalfProfile />
      </div>
      <div style={{ display: "flex" }}>
        {forms.map((form, index) => (
            console.log(form),
            <DropDownForm form={form} index={index} />

            
        ))}
        {/* <UserFormInput />
        <UserProjectInput />
        <CreateEventForm /> */}
      </div>
    </div>
  );
};

export default Profile;
