import axios from "axios";

export default API = {
  addEvent: ({ data }) => {
    axios({
      data,
      method: "POST",
      url: "http://localhost:5000/auth/api/events",
    })
      // log response from server
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getEvents: ({ eventId, successfulCb }) => {
    axios
      // api route
      .get("http://localhost:5000/auth/api/event/" + eventId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  getUsersAttendingEvents: ({ eventId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/userAttendingEvents/" + eventId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  getEventForUser: ({ eventId, userId, successfulCb }) => {
    axios
      .get(
        `http://localhost:5000/auth/api/userAttendingEvents/${userId}/${eventId}`
      )
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  signUpForEvent = ({data}) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/api/joinevent",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
