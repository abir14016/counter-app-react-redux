//reducer function file

import { DECREMENT, INCREMENT } from "./actionTypes"



//initial state
const initialState = {
    value: 20
};

//reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payLoad
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payLoad
            };
        default:
            return state
    };
};

export default counterReducer;