import React, { useEffect, useState, Component } from "react";
import axios from "axios"
class UserFormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: ""
    };
  }
  submitHandler = e => {

    e.preventDefault()
    console.log(this.state)
    axios({
        method: 'post',
        url: "http://localhost:5000/newuser", 
        data: this.state
      }).then(response => {
        console.log(response)

    })
    .catch(error => {
        console.log(error)
    });
}
  changeHandler = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { fName, lName } = this.state;
 

    return (
      <div>
        <h1>Profile</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="First Name "
            name="fName"
            value={fName}
            onChange={this.changeHandler}
          />
          <br />

          <input
    
            type="text"
            name="lName"
            value={lName}
            placeholder="Last Name"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <br />

          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}
export default UserFormInput;