import React, { Component } from "react";
import UserDetails from "./UserDetails";
import { API } from "../../../api";

//displays all data left quarter of page, picture, user info
// makes api get requests for children stateless react comps

class UserInfoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      userProjects: [],
      userEvents: [],
    };
  }

  displayDataFromForm = () => {
    this.setState({
      userData: [this.props.userInfo.userInfo],
    });
  };

  componentWillMount() {
    const userId = localStorage.getItem("token");
    API.getUserProfile({
      userId,
      successfulCb: (res) =>
        this.setState({ userData: [...this.state.userData, ...res.data[0]] }),
    });

    API.getUserProjects({
      userId,
      successfulCb: (res) =>
        this.setState({
          userProjects: [...this.state.userProjects, ...res.data[0]],
        }),
    });

    API.getEventsForUser({
      userId,
      successfulCb: (res) =>
        this.setState({
          userEvents: [...this.state.userEvents, ...res.data[0]],
        }),
    });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          {/* TODO: MAKE LOCAL */}
          <img
            src="https://images.idgesg.net/images/article/2017/06/reactjs_code_coding_thinkstock-100725807-large.jpg"
            width="400"
            height="400"
            alt="Italian Trulli"
          />
        </div>
        <div>
          <h3>UserInfo</h3>
          {this.state.userData.map((data, i) => (
            <UserDetails key={i} data={data} />
          ))}
        </div>
        <div>
          <h3>Projects</h3>
          {this.state.userProjects.map((data, i) => (
            <a href="https://www.w3schools.com">
              <UserDetails key={i} data={data} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default UserInfoCard;
