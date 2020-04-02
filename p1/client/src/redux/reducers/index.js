import profile from "./profile";
import projects from "./projects";
import isLogged from "./isLogged";
import {combineReducers} from "redux";
import renderSwitch from "./renderSwitch";

const allReducers = combineReducers({
    profile : profile,
    projects : projects,
    isLogged : isLogged,
    renderSwitch : renderSwitch
});

export default allReducers;