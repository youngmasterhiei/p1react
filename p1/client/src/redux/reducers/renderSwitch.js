// reducer
const renderParent = (state = false, action) => {
  switch (action.type) {
    case "RENDER_PARENT":
      return !state;
    default:
      return state;
  }
};

export default renderParent;
