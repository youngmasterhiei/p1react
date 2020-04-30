import React from "react";
import { API } from "../../../api";

const AddFriendButton = (props) => {
  const friendSubmit = (e) => {
    e.preventDefault();

    console.log("adding friend");
    console.log(props.data);

    const userId = localStorage.getItem("token");
    let username = "";
    // API.getUserProfile
    API.getUserProfile({
      userId,
      successfulCb: (res) => (username = res.data.fName + " " + res.data.lName),
    });
    console.log(username);
    const notification = {
      messageType: e.target.name,
      fromUserId: userId,
      fromUserName: username,
      receivingUserId: props.data.userId,
      message: "Requested you as a friend",
      userId: userId,
    };
    API.sendFriendRequest({ data: notification });
  };

  return (
    <div>
      <button onClick={friendSubmit} name={"Add Friend"}>
        Add Friend
      </button>
    </div>
  );
};

export default AddFriendButton;
