import React, { Component } from "react";
import { API } from "../../../api";
import UserDetails from "./UserDetails";
import AddFriendButton from "./AddFriendButton";

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

  componentWillMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get("userId");
    API.getDisplayProfile({
      userId,
      successfulCb: (res) =>
        this.setState({
          userData: res.data,
        }),
    });

    API.getDisplayProjects({
      userId,
      successfulCb: (res) =>
        this.setState({
          userProjects: res.data,
        }),
    });
  }

  renderUsersProfile = (userInfoType) => {
    if (userInfoType != null) {
      const UsersDetails = (
        <ul style={{ listStyle: "none" }}>
          {Object.keys(userInfoType).map((key) => (
            <li key={key}>{userInfoType[key]}</li>
          ))}
        </ul>
      );

      return [UsersDetails];
    } else {
      console.log("no data ran");
      // ******saving this for later use******
      // const dropdown = (
      //   <DropDownForm
      //     name={formTitle}
      //     formCallback={this.formCallback}
      //     formApiAction={"post"}
      //   />

      return <h4>Users profile incomplete</h4>;
    }
  };

  render() {
    const addFriend = () => {
      //
      //*implement later***
      //
      //
    };

    const { userData, userProjects } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://images.idgesg.net/images/article/2017/06/reactjs_code_coding_thinkstock-100725807-large.jpg"
            width="400"
            height="400"
            alt="Italian Trulli"
          />
        </div>
        <div>
          <h3>UserInfo</h3>

          {this.renderUsersProfile(userData)}
        </div>
        <div>
          <h3>Projects</h3>
          {this.renderUsersProfile(userProjects)}
        </div>
        <div>
          <AddFriendButton data={this.state.userData} />
        </div>
      </div>
    );
  }
}

export default UserInfoCard;
