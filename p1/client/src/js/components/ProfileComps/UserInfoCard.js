import React, { Component } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";

//displays all data left quarter of page, picture, user info
// makes api get requests for children stateless react comps

class UserInfoCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
  
    };



  }

  componentWillMount() {
    const userId = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then(res => {
        this.setState(res.data[0])
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    console.log(this.state)

    return (
        
      <div>
        {Object.entries(this.state).map((data, index) => (
          <UserDetails key={index} data={data} />
        ))}
      </div>
    );
  }
}

export default UserInfoCard;
