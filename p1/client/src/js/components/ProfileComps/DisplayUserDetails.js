import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import UserFormInput from "../ProfileComps/UserFormInput";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";
import DropDownForm from "../reusable/DropDownForm";
import UserDetails from "./UserDetails";
// import { useDispatch } from "react-redux";
// import { renderComp } from "../../../redux/actions/index";
// import FormSubmitHelper from "./FormSubmitHelper";

class DisplayUserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      userProjects: [],
      userEvents: [],
      userId: localStorage.getItem("token"),
      toggleRerender: true,
    };
  }
  getUserInfo = () => {
    const userId = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then((res) => {
        this.setState({
          userData: res.data,
        });
        console.log(this.state.userData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentWillMount() {
    const userId = localStorage.getItem("token");
    // const forms = [<UserFormInput key={"Edit Profile"} />, <UserProjectInput key={"Edit Projects"}/>, <CreateEventForm key={"Create Event"}/>]
    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then((res) => {
        this.setState({
          userData: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/auth/api/project/" + userId)
      .then((res) => {
        this.setState({
          userProjects: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/auth/api/events/" + userId)
      .then((res) => {
        this.setState({
          userEvents: [...this.state.userEvents, ...res.data[0]],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // changeHandler = e => {
  //   e.preventDefault();

  //   this.setState({ [e.target.name]: e.target.value });
  //   this.setState({ open: false });
  // };

  formCallback = (data, formTitle) => {
    // console.log(data);
    // console.log("hello");
    // this.getUserInfo();

    switch (formTitle) {
      case "Edit Profile":
        console.log("switch for profile hit");
        this.setState({
          userData: data,
        });
        break;
      case "Edit Projects":
        console.log("switch for projects hit");

        this.setState({
          userProjects: data,
        });
        break;
      // case "Apple":
      //   text = "How you like them apples?";
      //   break;
      // default:
      //   text = "I have never heard of that fruit...";
    }
  };

  closeDropDown = () => {
    console.log("dropdown submit");
  };

  renderProfile = (userInfoType, formTitle) => {
    if (userInfoType != null) {
      console.log(userInfoType);

      const MyComponent = (
        <ul style={{ listStyle: "none" }}>
          {Object.keys(userInfoType).map((key) => (
            <li key={key}>{userInfoType[key]}</li>
          ))}
        </ul>
      );
      const dropdown = (
        <DropDownForm
          name={formTitle}
          formCallback={this.formCallback}
          formApiAction={"put"}
        />
      );

      return [MyComponent, dropdown];
    } else {
      console.log("no data ran");
      const dropdown = (
        <DropDownForm
          name={formTitle}
          formCallback={this.formCallback}
          formApiAction={"post"}
        />
      );

      return dropdown;
    }
  };

  render() {
    const { userData, userProjects, userEvents, toggleRerender } = this.state;

    return (
      <div>
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
            {this.renderProfile(userData, "Edit Profile")}
          </div>
          <div>
            <h3>Projects</h3>
            {this.renderProfile(userProjects, "Edit Projects")}
          </div>
          {/* <div>
            <h3>Events</h3>
            {userEvents.map((data, i) => (
              <UserDetails
                key={"Events"}
                data={data}
                comp={<CreateEventForm key={"Add Event"} />}
              />
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}
export default DisplayUserDetails;
