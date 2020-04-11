import React, { Component } from "react";
import DropDownForm from "../reusable/DropDownForm";
import { API } from "../../../api";
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
    };
  }
  getUserInfo = () => {
    const userId = localStorage.getItem("token");
    API.getUserProfile({
      userId,
      successfulCb: (res) => this.setState({ userData: res.data }),
    });
  };

  componentWillMount() {
    const userId = localStorage.getItem("token");
    this.getUserInfo();
    API.getUserProjects({
      userId,
      successfulCb: (res) => this.setState({ userProjects: res.data }),
    });

    API.getEventsForUser({
      userId,
      successfulCb: (res) =>
        this.setState({
          userEvents: [...this.state.userEvents, ...res.data[0]],
        }),
    });
  }

  // changeHandler = e => {
  //   e.preventDefault();

  //   this.setState({ [e.target.name]: e.target.value });
  //   this.setState({ open: false });
  // };

  formCallback = (data, formTitle) => {
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
    const { userData, userProjects } = this.state;

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            {/* TODO: make this local */}
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
