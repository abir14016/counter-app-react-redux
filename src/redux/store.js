import counterReducer from "./counter/counterReducer";
import { CreateStore } from "redux";

//creating store
const store = CreateStore(counterReducer);

export default store;