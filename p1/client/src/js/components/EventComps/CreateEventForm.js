import React, { useEffect, useState, Component } from "react";
import axios from "axios";
class CreateEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      time: "",
      author: "",
      location: "",
      userId: localStorage.getItem("token")
    };
  }
  submitProfile = e => {
    e.preventDefault();
    localStorage.getItem("token")
    console.log(this.state);
    axios({
      method: "post",
      url: "http://localhost:5000/auth/api/events",
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
    const { title, date, time, author, location } = this.state;

    return (
      <div>
        <h3>Create Event</h3>
        <form onSubmit={this.submitProfile}>
          <input
            type="text"
            placeholder="Event Title"
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="date"
            value={date}
            placeholder="Event Date"
            onChange={this.changeHandler}
          />
          <br />

          <input
            type="text"
            name="time"
            value={time}
            placeholder="Event Time"
            onChange={this.changeHandler}

          />
          <br />
          <input
            type="text"
            name="author"
            value={author}
            placeholder="Event Host"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="location"
            value={location}
            placeholder="Event Location"
            onChange={this.changeHandler}
          />
          <br />
          

          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}
export default CreateEventForm;
