import React, { useEffect, useState, Component } from "react";
import axios from "axios";
class UserFormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      city: "",
      st: "",
      dateOfBirth: "",
      speciality: "",
      github: "",
      linkedIn: "",
      bio: "",
      userId: localStorage.getItem("token"),
      formTitle : "Edit Profile"
    };
  }
  submitProfile = e => {
    e.preventDefault();
    localStorage.getItem("token")
    console.log(this.state);
    axios({
      method: "post",
      url: "http://localhost:5000/profile",
      data: this.state
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.log(error);
      });
  };
  changeHandler = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };


  // sendToken = () => {

  //   this.props.parentCallback(header);
  //   console.log(header)
  //   console.log("title^^")
  // }

  render() {
    const { fName, lName, city, st, dateOfBirth, speciality, github, linkedIn, bio } = this.state;
    const header = "Edit Profile";
    console.log(header)
    console.log("wont post before click")

    return (
      <div>
{        <h3 className="formName" value="Edit Profile"></h3>
}        <form onSubmit={this.submitProfile}>
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
            name="speciality"
            value={speciality}
            placeholder="Programming Speciality"
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

          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}
export default UserFormInput;
