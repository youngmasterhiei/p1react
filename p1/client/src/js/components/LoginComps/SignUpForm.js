import React, { useEffect, useState, Component } from "react";
import axios from "axios"
class SignUpform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
  };

  render() {
    const { email, password } = this.state;
 

    return (
      <div>
        <h1> Sign up</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="email "
            id="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
          <br />

          <input
            //   value={passWord}
            //   onChange={getCredentials}
            type="password"
            name="password"
            value={password}
            id="passWord"
            placeholder="Password"
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
export default SignUpform;