import axios from "axios";

const BASE_URL = "http://localhost:5000";
const BASE_AUTH_URL = `${BASE_URL}/auth/api`;

export const API = {
  addEvent: ({ data }) => {
    axios({
      data,
      method: "POST",
      url: BASE_AUTH_URL + "/events",
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
      .get(BASE_AUTH_URL + "/event/" + eventId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  // TODO: userAttendingEvents should be consolidated into the /events/<userId> routes, with a QP indicating that we only want events
  // that the user is attending
  getAttendingEvent: ({ eventId, successfulCb }) => {
    axios
      .get(BASE_AUTH_URL + "/userAttendingEvents/" + eventId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  getAttendingEventForUser: ({ eventId, userId, successfulCb }) => {
    axios
      .get(BASE_AUTH_URL + `/userAttendingEvents/${userId}/${eventId}`)
      .then(successfulCb)
      .catch((error) => {
        console.log(error.events);
      });
  },
  signUpForEvent: ({ data }) => {
    axios({
      method: "POST",
      url: BASE_AUTH_URL + "/joinevent",
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
      url: `${BASE_URL}/login`,
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
      url: `${BASE_URL}/newuser`,
      data,
    })
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getNotificationsForUser: ({ userId, successfulCb }) => {
    axios
      .get(BASE_AUTH_URL + "/notifications/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  addFriend: ({ data }) => {
    axios({
      method: "POST",
      url: BASE_AUTH_URL + "/addFriend",
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
      url: BASE_AUTH_URL + "/updateNotification/" + notificationId,
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
      url: BASE_AUTH_URL + "/sendFriendRequest",
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
      .get(BASE_AUTH_URL + "/profile/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getUserProjects: ({ userId, successfulCb }) => {
    axios
      .get(BASE_AUTH_URL + "/project/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getEventsForUser: ({ userId, successfulCb }) => {
    axios
      .get(BASE_AUTH_URL + "/events/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  // TODO: this should take a user ID
  updateUserProfile: ({ data }) => {
    axios({
      method: "PUT",
      url: BASE_AUTH_URL + "/profile",
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
      url: BASE_AUTH_URL + "/profile",
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
      url: BASE_AUTH_URL + "/project",
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
      url: BASE_AUTH_URL + "/project",
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
      .get(BASE_AUTH_URL + "/displayprofile/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
  getDisplayProjects: ({ userId, successfulCb }) => {
    axios
      .get(BASE_AUTH_URL + "/displayprojects/" + userId)
      .then(successfulCb)
      .catch((error) => {
        console.log(error);
      });
  },
};
