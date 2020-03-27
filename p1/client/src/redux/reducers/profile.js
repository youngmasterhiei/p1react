// reducer
const profile = (state = {}, action) => {
  switch (action.type) {
    case "GETPROFILE":
      return state = action.payload;
    default:
      return state;
  }
};

export default profile;
