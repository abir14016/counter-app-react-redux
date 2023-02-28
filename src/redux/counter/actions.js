//action creators file
import { INCREMENT, DECREMENT } from "./actionTypes"

//increment action
export const increment = () => {
    return {
        type: INCREMENT,
    };
};

//decrement action
export const decrement = () => {
    return {
        type: DECREMENT,
    };
};