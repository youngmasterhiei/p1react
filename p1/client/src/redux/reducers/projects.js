// reducer
const projects = (state = {}, action) => {
    switch (action.type) {
      case "GETPROJECTS":
        return state = action.payload;
      default:
        return state;
    }
  };
  
  export default projects;
  