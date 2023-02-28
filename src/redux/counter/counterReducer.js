//reducer function file

import { DECREMENT, INCREMENT } from "./actionTypes"



//initial state
const initialState = {
    value: 0
};

//reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case DECREMENT:
            return {

            };
        default:
            return state
    };
};

export default counterReducer;