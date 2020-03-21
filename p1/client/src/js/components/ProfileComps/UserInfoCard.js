import React, { Component } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";

//displays all data left quarter of page, picture, user info
// makes api get requests for children stateless react comps

class UserInfoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      userProjects: []
    };
  }

  //   userData: {
  //     fName: "",
  //     lName: "",
  //     city: "",
  //     st: "",
  //     dateOfBirth: "",
  //     speciality: "",
  //     github: "",
  //     linkedIn: "",
  //     bio: ""
  //   }

  componentWillMount() {
    const userId = localStorage.getItem("token");
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
  }

  render() {

    return (
        <div>
      <div style={{float:'left'}}>
          <h1>UserInfo</h1>
        {this.state.userData.map((data, i) => (
          <UserDetails key={i} data={data} />
        ))}
        </div>
        <div>
            <h1>Projects</h1>
          {this.state.userProjects.map((data, i) => (
          <UserDetails key={i} data={data} />
        ))}
      </div>
      </div>
    );
  }
}

export default UserInfoCard;
