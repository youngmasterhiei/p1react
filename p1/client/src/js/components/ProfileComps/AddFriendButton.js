import React from "react";
import { API } from "../../../api";

const AddFriendButton = (props) => {
  const friendSubmit = (e) => {
    console.log("hello");
    const userId = localStorage.getItem("token");
    e.preventDefault();
    const notification = {
      messageType: e.target.name,
      fromUserId: userId,
      receivingUserId: props.data[0].userId,
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
