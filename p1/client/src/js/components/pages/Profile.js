import React from 'react';
import UserFormInput from "../ProfileComps/UserFormInput"; 
import DisplayTopHalfProfile from '../ProfileComps/DisplayUserDetails';
const Profile = () => {
    return (
       <div>
          <h1>Profile</h1>
          <DisplayTopHalfProfile />
           <p>Profile page body content</p>
           <UserFormInput />

       </div>
    );
}
 
export default Profile;
