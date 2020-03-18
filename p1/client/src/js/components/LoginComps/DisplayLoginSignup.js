import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpform from "./SignUpForm";

class DisplayLoginSignup extends Component {
  constructor(props) {
    super(props);

    this.state = { loginClicked: true };
  }
  handleLoginClick = e => {
    this.setState({ loginClicked: true });
  };
  handleSignUpClick = e => {
    this.setState({ loginClicked: false });

  };

  render() {
    const loginClicked = this.state.loginClicked;
    let displayForm;
    let button;
    if (loginClicked) {
      displayForm = <LoginForm />;
      button = <button onClick={this.handleSignUpClick}>SignUp?</button>;
    } else {
      displayForm = <SignUpform />;
      button = <button onClick={this.handleLoginClick}>Login</button>;
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
