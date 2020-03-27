import React, { Component } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";
import { useDispatch } from "react-redux";
import { getProfile } from "../../../redux/actions/index";
import { getProjects } from "../../../redux/actions/index";

//displays all data left quarter of page, picture, user info
// makes api get requests for children stateless react comps

class UserInfoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      userProjects: [],
      userEvents: []
    };
  }

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

  render() {
    // // const usersProfile = useSelector(state => state.profile)
    // const dispatch = useDispatch();
    // dispatch(getProfile)
    const storeProfileRedux = data => {
      const dispatch = useDispatch();
      dispatch(getProfile(data));
    };

    const storeProjectsRedux = data => {
      const dispatch = useDispatch();
      dispatch(getProjects(data));
    };


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
          {this.state.userData.map((data, i) => (
            <UserDetails
              key={i}
              data={data}
              passedFunction={storeProfileRedux}
            />
          ))}
        </div>
        <div>
          <h3>Projects</h3>
          {this.state.userProjects.map((data, i) => (
            <a href="https://www.w3schools.com">
              <UserDetails
                key={i}
                data={data}
                passedFunction={storeProjectsRedux}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default UserInfoCard;