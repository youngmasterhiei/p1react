import axios from "axios";

export const API = {
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
  // TODO: userAttendingEvents should be consolidated into the /events/<userId> routes, with a QP indicating that we only want events
  // that the user is attending
  getAttendingEvent: ({ eventId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/userAttendingEvents/" + eventId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  getAttendingEventForUser: ({ eventId, userId, successfulCb }) => {
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
      method: "POST",
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
      method: "PUT",
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
  sendFriendRequest: ({ data }) => {
    axios({
      method: "post",
      url: "http://localhost:5000/auth/api/sendFriendRequest",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getUserProfile: ({ userId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/profile/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getUserProjects: ({ userId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/project/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getEventsForUser: ({ userId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/events/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  // TODO: this should take a user ID
  updateUserProfile: ({ data }) => {
    axios({
      method: "PUT",
      url: "http://localhost:5000/auth/api/profile",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createUserProfile: ({ data }) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/api/profile",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // TODO: should take an ID
  updateProject: ({ data }) => {
    axios({
      method: "PUT",
      url: "http://localhost:5000/auth/api/project",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createProject: ({ data }) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/auth/api/project",
      data,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getDisplayProfile: ({ userId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/displayprofile/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getDisplayProjects: ({ userId, successfulCb }) => {
    axios
      .get("http://localhost:5000/auth/api/displayprojects/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
};
