import React, { Component } from "react";
import API from "../../../api";
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  sendToken = () => {
    this.props.parentCallback(localStorage.getItem("token"));
  };

  submitHandler = (e) => {
    e.preventDefault();
    API.login({
      data: this.state,
      successfulCb: (response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data);
        }
        this.sendToken();
        this.props.storeToken();
      },
    });
  };
  changeHandler = (e) => {
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
