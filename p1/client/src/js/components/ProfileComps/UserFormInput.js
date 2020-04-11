import React, { Component } from "react";
import API from "../../../api/";

class UserFormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      city: "",
      st: "",
      dateOfBirth: "",
      specialty: "",
      github: "",
      linkedIn: "",
      bio: "",
      userId: localStorage.getItem("token"),
      open: true,
    };
  }
  submitProfile = (e) => {
    e.preventDefault();
    const userInfo = this.state;

    this.props.formCallback(userInfo, "Edit Profile");
    this.props.toggleDropdown();
    console.log(userInfo);
    localStorage.getItem("token");
    if (this.props.formApiAction === "put") {
      API.updateUserProfile({ data: this.state });
    } else {
      API.createUserProfile({ data: this.state });
    }
  };

  changeHandler = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
    this.setState({ open: false });
  };

  render() {
    const {
      fName,
      lName,
      city,
      st,
      dateOfBirth,
      specialty,
      github,
      linkedIn,
      bio,
    } = this.state;

    return (
      <div>
        {<h3 className="formName" value="Edit Profile"></h3>}{" "}
        <form>
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
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="st"
            value={st}
            placeholder="State"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="dateOfBirth"
            value={dateOfBirth}
            placeholder="Date of Birth"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="specialty"
            value={specialty}
            placeholder="Programming specialty"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="github"
            value={github}
            placeholder="Github"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="linkedIn"
            value={linkedIn}
            placeholder="LinkedIn"
            onChange={this.changeHandler}
          />
          <br />

          <textarea
            type="text"
            name="bio"
            value={bio}
            placeholder="Bio"
            onChange={this.changeHandler}
          />
          <br />
          <input type="submit" onClick={this.submitProfile} name="Submit" />
        </form>
      </div>
    );
  }
}
export default UserFormInput;
