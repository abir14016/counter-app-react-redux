//reducer function file

import { DDECREMENT, DINCREMENT } from "./actionTypes"



//initial state
const initialState = {
    value: 0
};

//reducer function
const dynamiccounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENT:
            return {
                ...state,
                value: state.value + action.payLoad
            };
        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payLoad
            };
        default:
            return state
    };
};

export default dynamiccounterReducer;