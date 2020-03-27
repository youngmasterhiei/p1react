

  export function isLogged() {
    if (localStorage.getItem("token") === "") {
        return false
      }
    
      else {
        return true
      }

}