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
      open: true
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("token");
    // const forms = [<UserFormInput key={"Edit Profile"} />, <UserProjectInput key={"Edit Projects"}/>, <CreateEventForm key={"Create Event"}/>]

    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then(res => {
        this.setState({
          userData: [...this.state.userData, ...res.data[0]]
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

  // storeSwitchRedux = () => {
  //   // const dispatch = useDispatch();
  //   // dispatch(renderComp(true));
  // };

  render() {
    const { userData, userProjects, userEvents } = this.state;
    userData.key = "Edit Profile";
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
            {userData.map((data, i) => (
              <UserDetails
                data={data}
                key={"User Input"}
                comp={<UserFormInput key={"Edit Profile"} />}
              />
            ))}
          </div>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayUserDetails;

// import React from "react";
// import UserInfoCard from "./UserInfoCard";

// // //display top half comp
// // class DisplayTopHalfProfile extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <UserInfoCard />
// //       </div>
// //     );
// //   }
// // }

// const DisplayUserDetails = props => (
//   <div>
//     <UserInfoCard userInfo={props} />
//   </div>
// );

// export default DisplayUserDetails;
