import React, { Component } from "react";
import { API } from "../../../api";

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    // set state for the form
    this.state = {
      title: "",
      date: "",
      time: "",
      desc: "",
      imagePath: "",
      author: "",
      location: "",
      userId: localStorage.getItem("token"),
    };
  }

  // onclick submit form data to db
  submitProfile = (e) => {
    e.preventDefault();
    localStorage.getItem("token");
    console.log(this.state);
    API.addEvent({ data: this.state });
  };
  // handles change in the input boxes and sets state to the value
  changeHandler = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // destructs the state into a const
    const { title, date, time, desc, imagePath, author, location } = this.state;

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
            name="desc"
            value={desc}
            placeholder="Event description"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="imagePath"
            value={imagePath}
            placeholder="Image Link"
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
