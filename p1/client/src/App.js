import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./js/components/Nav/Nav"
import Events from "./js/components/pages/Events";
import Forum from "./js/components/pages/Forum";
import Home from "./js/components/pages/Home";
import Profile from "./js/components/pages/Profile";
import DisplayEvent from "./js/components/pages/DisplayEvent";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

    <div className="App">
        <Nav />

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
