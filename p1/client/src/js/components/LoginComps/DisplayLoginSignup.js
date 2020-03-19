import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpform from "./SignUpForm";

class DisplayLoginSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginClicked: true,
      token: localStorage.getItem("token")
    };
  }
  handleLoginClick = e => {
    this.setState({ loginClicked: true });

  };
  handleSignUpClick = e => {
    this.setState({ loginClicked: false });
  };
  handleLogOut = e => {
    localStorage.setItem("token", ""), this.setState({ token: "" });
  };

  callbackFunction = (childData) => {
    this.setState({token: localStorage.getItem("token")});
  }
  render() {
    const loginClicked = this.state.loginClicked;
    const token = localStorage.getItem("token");
    let displayForm;
    let button;
    console.log("hello 1 ")
    console.log(token)
    if (loginClicked && token === "") {
      displayForm = <LoginForm parentCallback = {this.callbackFunction} />;
      button = <button onClick={this.handleSignUpClick}>SignUp?</button>;
    } else if (!loginClicked){
      displayForm = <SignUpform />;
      button = <button onClick={this.handleLoginClick}>Login</button>;
    } else {
        
      button = <button onClick={this.handleLogOut}>Logout</button>;
    }
    return (
      <div>
        {button}

        {displayForm}
      </div>
    );
  }
}
export default DisplayLoginSignup;
