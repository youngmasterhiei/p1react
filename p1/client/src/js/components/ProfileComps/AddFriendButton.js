import React from "react";
import { API } from "../../../api";

const AddFriendButton = (props) => {
  const friendSubmit = (e) => {
    console.log("hello");
    console.log(props.data.id);

    const userId = localStorage.getItem("token");
    e.preventDefault();
    const notification = {
      messageType: e.target.name,
      fromUserId: userId,
      receivingUserId: props.data.id,
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
