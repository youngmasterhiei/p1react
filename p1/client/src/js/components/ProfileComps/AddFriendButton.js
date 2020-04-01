import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios"


const AddFriendButton = props => {
    console.log(props.data)

    const friendSubmit = (e) =>{
        console.log("hello")
        const userId = localStorage.getItem("token");
        e.preventDefault();
        const notification = {
            messageType: e.target.name,
            fromUserId: userId,
            receivingUserId: props.data[0].userId,
            message: "Requested you as a friend",
            userId: userId

        };
        axios({
          method: "post",
          url: "http://localhost:5000/auth/api/sendFriendRequest",
          data: notification
        })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    }
    return (
        <div>
            <button onClick={friendSubmit} name={"Add Friend"}>Add Friend</button>
        </div>
    );
};

AddFriendButton.propTypes = {
    
};

export default AddFriendButton;