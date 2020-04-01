import React from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import ViewUserCard from "../ProfileComps/ViewUserCard";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
import DropDownForm from "../reusable/DropDownForm";
// const forms = [<UserFormInput key={"Edit Profile"} />, <UserProjectInput key={"Edit Projects"}/>, <CreateEventForm key={"Create Event"}/>]

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>

      <div style={{ display: "flex" }}>
        <ViewUserCard />
      </div>
      <div style={{ display: "flex" }}>
        {/* {forms.map((form, index) => (
            <DropDownForm form={form} index={index} />

            
        ))} */}

      </div>
    </div>
  );
};

export default Profile;
