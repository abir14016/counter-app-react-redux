import counterReducer from "./counter/counterReducer";
import { createStore } from "redux";

//creating store
const store = createStore(counterReducer);

export default store;