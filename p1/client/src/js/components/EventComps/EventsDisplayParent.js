import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchEvents from "./SearchEvents";
import axios from "axios";
import EventList from "./EventList";
import "../../../style/Event.css";

class EventsDisplayParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{}],
      displayedEvent: "",
      eventIndex: 0,
      attending: false
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/auth/api/events")
      .then(res => {
        const events = res.data;
        events.map(function(name, index) {
          name.index = index;
        });

        this.setState({
          events: events,
          displayedEvent: events[0]
        });
      })
      .catch(error => {
        console.log(error.events);
      });
  }

  nextSlide = () => {
    let newIndex = this.state.displayedEvent.index + 1;
    this.setState({
      displayedEvent: this.state.events[newIndex]
    });
  };

  prevSlide = () => {
    let newIndex = this.state.displayedEvent.index - 1;
    this.setState({
      displayedEvent: this.state.events[newIndex]
    });
  };

  joinButtonCallback = () => {
    this.setState({ attending: true });
    console.log("hello second callback");
    console.log(this.state.attending);
  };

  render() {
    const { events, displayedEvent, eventIndex } = this.state;

    return (
      <div>
        <div style={{}}>
          <SearchEvents />
        </div>
        <button
          onClick={this.nextSlide}
          disabled={displayedEvent.index === events.length - 1}
        >
          next
        </button>
        <button onClick={this.prevSlide} disabled={displayedEvent.index === 0}>
          prev
        </button>
        <div
          className={`card-slider active-slide-${displayedEvent.index}`}
          style={{
            overflow: "hidden",
            display: "flex"
          }}
        >
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${displayedEvent.index *
                (100 / events.length)}%)`
            }}
          >
            {this.state.events.map((data, i) => (
              <EventList
                key={i}
                data={data}
                joinButtonCallback={this.joinButtonCallback}
                activeCard={displayedEvent.index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

EventsDisplayParent.propTypes = {};

export default EventsDisplayParent;
