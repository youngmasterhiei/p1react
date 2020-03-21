import React from 'react';
import UserFormInput from "../ProfileComps/UserFormInput"; 
import DisplayTopHalfProfile from '../ProfileComps/DisplayUserDetails';
import UserProjectInput from '../ProfileComps/UserProjectInput';
const Profile = () => {
    return (
       <div>
          <h1>Profile</h1>
          <DisplayTopHalfProfile />
           <p>Profile page body content</p>
           <UserFormInput />
           <UserProjectInput />

       </div>
    );
}
 
export default Profile;
