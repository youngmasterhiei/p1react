import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Notification = props => {
  console.log(props.data.id);
  const acceptFriendRequest = e => {
    e.preventDefault();
    const userId = localStorage.getItem("token");
    const friendUserId = props.data.fromUserId;
    console.log(friendUserId);
    const data = {
      userId: userId,
      friendUserId: friendUserId
    };
    axios({
      method: "post",
      url: "http://localhost:5000/auth/api/addFriend",
      data: data
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
   
    //
    // *******Add in update read to true when dropdown is open, add display only non read messages?? or 
    // display only latest 5-10 unless display all messages clicked******** 
    //
    //
    const update = {
        actedUpon: true
      };

      axios({
        method: "put",
        url: "http://localhost:5000/auth/api/updateNotification/" + props.data.id,
        data: update
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
  };

  const notifyAction =
    props.data.messageType === "Add Friend" ? (
        <li>
        {"user id: " + props.data.fromUserId} {props.data.message} {notifyAction}
     
      <button onClick={acceptFriendRequest}>Accept?</button></li>
    ) : (
      <h1></h1>
    );
  return (
    <div>
     {notifyAction}
    </div>
  );
};

Notification.propTypes = {};

export default Notification;
