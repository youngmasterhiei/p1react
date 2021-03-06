import React from "react";
import { API } from "../../../api";

const Notification = (props) => {
  const acceptFriendRequest = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("token");
    const friendUserId = props.data.fromUserId;
    const data = {
      userId: userId,
      friendUserId: friendUserId,
    };
    const update = {
      actedUpon: true,
    };
    API.addFriend({ data });
    API.updateNotification({ data: update, notificationId: props.data.id });
    //
    // *******Add in update read to true when dropdown is open, add display only non read messages?? or
    // display only latest 5-10 unless display all messages clicked********
    //
    //
  };

  // TODO: this does not make sense what's going on here...

  // needs to be a switch if case == Add friend do x
  // if case == message do x
  const notifyAction =
    props.data.messageType === "Add Friend" ? (
      <li>
        {"user id: " + props.data.fromUserId} {props.data.message}{" "}
        {notifyAction}
        <button onClick={acceptFriendRequest}>Accept?</button>
      </li>
    ) : null;
  return <div>{notifyAction}</div>;
};

Notification.propTypes = {};

export default Notification;
