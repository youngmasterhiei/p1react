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
      open: true,
      toggleRerender: true
    };
  }

  getUserInfo = () => {
    const userId = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then(res => {
        this.setState({
          userData: res.data
        });
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillMount() {
    const userId = localStorage.getItem("token");
    // const forms = [<UserFormInput key={"Edit Profile"} />, <UserProjectInput key={"Edit Projects"}/>, <CreateEventForm key={"Create Event"}/>]

    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then(res => {
        this.setState({
          userData: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/auth/api/project/" + userId)
      .then(res => {
        this.setState({
          userProjects: [...this.state.userProjects, ...res.data[0]]
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/auth/api/events/" + userId)
      .then(res => {
        this.setState({
          userEvents: [...this.state.userEvents, ...res.data[0]]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // changeHandler = e => {
  //   e.preventDefault();

  //   this.setState({ [e.target.name]: e.target.value });
  //   this.setState({ open: false });
  // };

  formCallback = data => {
    // console.log(data);
    // console.log("hello");
    // this.getUserInfo();
    this.setState({
      userData: data
    });
    console.log(this.state);
    console.log("newState");
  };

  closeDropDown = () => {
    console.log("dropdown submit");
    // this.getUserInfo();
  };

  render() {
    const { userData, userProjects, userEvents, toggleRerender } = this.state;
    const MyComponent =
      toggleRerender === true ? <h1>data</h1> : <h3>no user data here!</h3>;
    // const MyComponent =
    // (receivedData === true) ? <h1>data</h1> : <h3>no user data here!</h3>;
    console.log(userData);
    console.log("userdata");

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
            {MyComponent}

            {/* {Object.keys(githubData).map(key => (
            <Issue key={key} details={githubData[key]} />
                ))} */}
            {/* scrapping userdetails component, added object.keys.map instead of .map, no need to map it twice.
            passing each form component into the drop down using a switch inside dropdown
            */}
            <ul style={{ listStyle: "none" }}>
              {Object.keys(userData).map(key => (
                <li key={key}>{userData[key]}</li>
              ))}
            </ul>
            <DropDownForm
              name={"Edit Profile"}
              formCallback={this.formCallback}
            />
          </div>
          {/* <div>
            <h3>Projects</h3>
            {userProjects.map((data, i) => (
              <UserDetails
                key={"Projects"}
                data={data}
                comp={<UserProjectInput key={"Edit Projects"} />}
              />
            ))}
          </div>
          <div>
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
