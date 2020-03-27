import profile from "./profile";
import projects from "./projects";
import isLogged from "./isLogged";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    profile : profile,
    projects : projects,
    isLogged : isLogged
});

export default allReducers;