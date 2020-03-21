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
      p1Link: "",
      p2Link: "",
      p3Link: "",
      p4Link: "",
      p5Link: "",
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
    const {
      project1,
      project2,
      project3,
      project4,
      project5,
      p1Link,
      p2Link,
      p3Link,
      p4Link,
      p5Link
    } = this.state;

    return (
      <div>
        <h3>Edit Projects</h3>
        <form onSubmit={this.submitProfile}>
          <input
            type="text"
            placeholder="Project 1 Title"
            name="project1"
            value={project1}
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            placeholder="Project 1 Link"
            name="p1Link"
            value={p1Link}
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="project2"
            value={project2}
            placeholder="Project 2 Title"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="p2Link"
            value={p2Link}
            placeholder="Project 2 Link"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="project3"
            value={project3}
            placeholder="Project 3 Title"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="p3Link"
            value={p3Link}
            placeholder="Project 3 Link"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="project4"
            value={project4}
            placeholder="Project 4 Title"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="p4Link"
            value={p4Link}
            placeholder="Project 4 Link"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="project5"
            value={project5}
            placeholder="Project 5 Title"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="p5Link"
            value={p5Link}
            placeholder="Project 5 Link"
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
