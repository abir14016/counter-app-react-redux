import rootReducer from "../rootReducer";

//custom middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upComingState = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming State: ${JSON.stringify(upComingState)}`)

    //passing action
    next(action);
};

export default myLogger;