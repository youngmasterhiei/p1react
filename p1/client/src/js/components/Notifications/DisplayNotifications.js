import React from "react";
import axios from "axios";
import Notification from "./Notification";

class DisplayNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [{}]
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/auth/api/notifications/" + userId)
      .then(res => {
        this.setState({
          notifications: [res.data[0]]
        });
        console.log(this.state.notifications);
      })
      .catch(error => {
        console.log(error);
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

DisplayNotifications.propTypes = {};

export default DisplayNotifications;
