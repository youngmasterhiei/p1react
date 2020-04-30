import React, { Component } from "react";
import Notification from "./Notification";
import { API } from "../../../api";
import { Link } from "react-router-dom";

class DisplayNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentWillMount() {
    console.log("hello from displaynotif");
    const userId = localStorage.getItem("token");
    API.getNotificationsForUser({
      userId,
      successfulCb: (res) => {
        console.log(res.data);
        this.setState({ notifications: res.data });
      },
    });
  }

  acceptFriendRequest = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("token");
    const friendUserId = this.props.data.fromUserId;
    const data = {
      userId: userId,
      friendUserId: friendUserId,
      actedUpon: true,
    };

    API.addFriend({ data });
    // API.updateNotification({ data: update, notificationId: props.data.id });
    //
    // *******Add in update read to true when dropdown is open, add display only non read messages?? or
    // display only latest 5-10 unless display all messages clicked********
    //
    //
  };

  notificationAction = (notification) => {
    console.log("from inside function");
    console.log(notification.fromUserId);
    console.log("from inside function");
    // API.getUserProfile
    // API.getUserProfile({
    //   eventId,
    //   successfulCb: (res) => this.setState({ event: res.data[0] }),
    // });
    switch (notification.messageType) {
      case "Message":
        return (
          <h3>Message From User</h3>
          // <UserFormInput
          //   formCallback={props.formCallback}
          //   toggleDropdown={toggle}
          //   formApiAction={props.formApiAction}
          // />
        );
      case "Add Friend":
        return (
          <ul>
            <li>
              <Link to={"/displayprofile?userId=" + notification.fromUserId}>
                {notification.fromUserName + " "}
              </Link>

              {notification.message + " "}
              <button onClick={this.acceptFriendRequest}>Accept?</button>
            </li>
          </ul>
        );
      // case "Notifications":
      //   return <DisplayNotifications name={props.name} />;
      default:
        return <h1> no message</h1>;
    }
  };

  //   const notifyAction =
  //   props.data.messageType === "Add Friend" ? (
  //     <li>
  //       {"user id: " + props.data.fromUserId} {props.data.message}{" "}
  //       {notifyAction}
  //       <button onClick={acceptFriendRequest}>Accept?</button>
  //     </li>
  //   ) : null;
  // return <div>{notifyAction}</div>;
  // };

  render() {
    const notifications = this.state.notifications;
    // console.log(this.state.notifications);

    return (
      // <div>
      //   {/* <h3>notifications</h3> */}

      //   <ul style={{ listStyle: "none" }}>
      //     {Object.keys(notifications).map((key) => (
      //       <li key={key}>{notifications[key]}</li>
      //     ))}
      //     {/* {this.notificationAction(notifications)} */}
      //   </ul>
      // </div>
      // {Object.keys(userInfoType).map((key) => (
      //   <li key={key}>{userInfoType[key]}</li>
      // ))}
      <div>
        {/* {this.notificationAction(notifications[0])} */}
        {Object.keys(notifications).map((key) =>
          this.notificationAction(notifications[key])
        )}
      </div>
    );
  }
}

{
  /* <ul style={{ listStyle: "none" }}>
{Object.keys(userInfoType).map((key) => (
  <li key={key}>{userInfoType[key]}</li>
))}
</ul> */
}

export default DisplayNotifications;
