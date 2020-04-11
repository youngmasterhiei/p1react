import React, { Component } from "react";
import Notification from "./Notification";
import { API } from "../../../api";

class DisplayNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [{}],
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("token");
    API.getNotificationsForUser({
      userId,
      successfulCb: (res) => this.setState({ notifications: [res.data[0]] }),
    });
  }
  //   <ul style={{listStyle:'none'}}>
  //   {propData.map((data, i) => (
  //     <li key={i}>{data}</li>
  //   ))}

  render() {
    const notifications = this.state.notifications;
    return (
      <div>
        <h3>notifications</h3>
        <ul>
          {notifications.map((data, i) => (
            <Notification key={i} data={data} />
          ))}
        </ul>
      </div>
    );
  }
}

export default DisplayNotifications;
