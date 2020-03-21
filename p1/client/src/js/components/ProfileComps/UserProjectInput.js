import React, { useEffect, useState, Component } from "react";
import axios from "axios";
class UserProjectInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project1: "",
      project2: "",
      project3: "",
      project4: "",
      project5: "",
      userId: localStorage.getItem("token")
    };
  }
  submitProfile = e => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "post",
      url: "http://localhost:5000/auth/api/project",
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

  render() {
    const { project1, project2, project3, project4, project5 } = this.state;

    return (
      <div>
        <h1>Edit Projects</h1>
        <form onSubmit={this.submitProfile}>
          <input
            type="text"
            placeholder="Project 1"
            name="project1"
            value={project1}
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="project2"
            value={project2}
            placeholder="Project 2"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="project3"
            value={project3}
            placeholder="Project 3"
            onChange={this.changeHandler}

          />
          <br />
          <input
            type="text"
            name="project4"
            value={project4}
            placeholder="Project 4"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="project5"
            value={project5}
            placeholder="Project 5"
            onChange={this.changeHandler}
          />
          <br />
          

          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}
export default UserProjectInput;
