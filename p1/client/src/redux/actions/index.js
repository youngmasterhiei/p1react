// action for store
export const getProfile = (usersProfile) => {

    return {
      type: "GETPROFILE",
      payload: usersProfile
    }
  }

  export const getProjects = (usersProjects) => {

    return {
      type: "GETPROJECTS",
      payload: usersProjects
    }
  }

  export const loggedIn = (token) => {

    return {
      type: "SIGN_IN",
      payload: token
    }
  }

  export const renderComp = (renderSwitch) => {

    return {
      type: "RENDER_PARENT",
      payload: renderSwitch
    }
  }
