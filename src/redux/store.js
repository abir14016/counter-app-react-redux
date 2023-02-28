import { applyMiddleware, createStore } from "redux";
import myLogger from "./middlewares/myLogger";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

//creating store
const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;