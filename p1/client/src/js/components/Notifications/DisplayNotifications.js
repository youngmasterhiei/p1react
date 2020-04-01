import React from "react";
import axios from "axios"
import Notification from "./Notification"

class DisplayNotifications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [{}]
         
          };

    }


    componentWillMount() {
        const userId = localStorage.getItem("token");
        axios
          .get("http://localhost:5000/auth/api/notifications/" + userId)
          .then(res => {
              console.log(res)
            this.setState({
              notifications: [...this.state.notifications, ...res.data[0]]
            });
            console.log(this.state.notifications)
            console.log(this.state.notifications)

          })
          .catch(error => {
            console.log(error);
          });
    
   
      }


    render() {
        return (
            <div>
                <h3>notifications</h3>
                <Notification data={this.state.notifications} />
            </div>
        );
    }
}

DisplayNotifications.propTypes = {

};

export default DisplayNotifications;