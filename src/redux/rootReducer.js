import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamiccounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamiccounterReducer
});

export default rootReducer;