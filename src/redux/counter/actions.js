//action creators file
import { INCREMENT, DECREMENT } from "./actionTypes"

//increment action
export const increment = (value) => {
    return {
        type: INCREMENT,
        paLoad: value
    };
};

//decrement action
export const decrement = (value) => {
    return {
        type: DECREMENT,
        paLoad: value
    };
};