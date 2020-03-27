import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// react store holds all data or state for application

import Nav from "./js/components/Nav/Nav"
import Events from "./js/components/pages/Events";
import Forum from "./js/components/pages/Forum";
import Home from "./js/components/pages/Home";
import Profile from "./js/components/pages/Profile";
import DisplayEvent from "./js/components/pages/DisplayEvent";

import { useDispatch } from "react-redux";
import { loggedIn } from "./redux/actions/index";


import logo from "./logo.svg";
import "./App.css";








//create store

//display store in console
// store.subscribe(() => console.log(store.getState()));
// storeLoginRedux = {this.storeLoginRedux}


// store.dispatch(getProfile())
// storeLoginRedux = data => {
//   const dispatch = useDispatch();
//   dispatch(loggedIn(data));
// };



function App() {
  const dispatch = useDispatch();
  console.log(localStorage.getItem("token") === "")

  function storeToken(){
    console.log("inside token app.js")
    console.log(localStorage.getItem("token")) 

    if (localStorage.getItem("token") === "") {
      dispatch(loggedIn(false))
      console.log("token being set false")
    }
  
    else {
      dispatch(loggedIn(true))
      console.log("token being set true")
    }
  }

// localStorage.getItem("token" === "") ? dispatch(loggedIn(false)) : dispatch(loggedIn(false));

  return (
    <BrowserRouter>

    <div className="App">
        <Nav storeToken = {storeToken}/>

            <Switch>

             <Route path="/" exact component={Home} />
             <Route path="/events" component={Events}/>
             <Route path="/forum" component={Forum}/>
             <Route path="/home" component={Home}/>
             <Route path="/profile" component={Profile}/>
             <Route path="/displayevent" component={DisplayEvent}/>

            <Route component={Error}/>
           </Switch>

        </div> 
      </BrowserRouter>
      
  );
}





export default App;
