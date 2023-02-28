//action creators file
import { INCREMENT, DECREMENT } from "./actionTypes"

//increment action
export const increment = (value) => {
    return {
        type: INCREMENT,
        payLoad: value
    };
};

//decrement action
export const decrement = (value) => {
    return {
        type: DECREMENT,
        payLoad: value
    };
};