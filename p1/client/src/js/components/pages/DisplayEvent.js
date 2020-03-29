import React from 'react';
import EventInfo from "../EventComps/EventInfo"




const DisplayEvent = () => {
   console.log(localStorage.getItem("eventId"))
    return (
       <div>
          <h1>DisplayEvent US</h1>
          <EventInfo />
       </div>
    );
}
 
export default DisplayEvent;