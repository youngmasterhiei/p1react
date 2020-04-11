import axios from "axios";

export default API = {
  addEvent: ({ data }) => {
    axios({
      data,
      method: "POST",
      url: "http://localhost:5000/auth/api/events",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getEvents: ({ eventId, successfulCb }) => {
    axios
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
  signUpForEvent: ({ data }) => {
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
  },
  login: ({ data, successfulCb }) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/login",
      data,
    })
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  createNewUser: ({ data, successfulCb }) => {
    axios({
      method: "post",
      url: "http://localhost:5000/newuser",
      data,
    })
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getNotificationsForUser: ({ userId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/notifications/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  addFriend: ({ data }) => {
    axios({
      method: "post",
      url: "http://localhost:5000/auth/api/addFriend",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateNotification: ({ data, notificationId }) => {
    axios({
      method: "put",
      url:
        "http://localhost:5000/auth/api/updateNotification/" + notificationId,
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
