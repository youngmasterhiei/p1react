import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class SearchEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: {},
      search: "",
    };
  }

  submitSearch = (e) => {
    e.preventDefault();

    console.log(this.state.search);
    // axios
    // .get("http://localhost:5000/auth/api/events/" + this.state.search)
    // .then(res => {
    //   this.setState({
    //     events: [...this.state.events, ...res.data[0]]
    //   });
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  };

  changeHandler = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <label>Search: </label>
          <input type="text" name="search" onChange={this.changeHandler} />
          <button name="submit">Submit</button>
        </form>
      </div>
    );
  }
}

SearchEvents.propTypes = {};

export default SearchEvents;
