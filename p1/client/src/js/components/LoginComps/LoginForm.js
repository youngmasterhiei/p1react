import React, { useEffect, useState, Component } from "react";
import axios from "axios"
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  sendToken = () => {

    this.props.parentCallback(localStorage.getItem("token"));
    console.log("token after click")
    console.log(localStorage.getItem("token"))
  }

  


  submitHandler = e => {

    e.preventDefault()
    axios({
        method: 'post',
        url: "http://localhost:5000/login", 
        data: this.state
      }).then(response => {
        if (response.data.token){
        localStorage.setItem("token", response.data.token);
}
        this.sendToken();

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
        <h1> Login </h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="email "
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
            placeholder="Password"
            onChange={this.changeHandler}
          />
          <br />

     

          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}
export default LoginForm;