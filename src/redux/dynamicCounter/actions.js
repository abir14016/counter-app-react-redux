//action creators file
import { DINCREMENT, DDECREMENT } from "./actionTypes"

//increment action
export const increment = (value) => {
    return {
        type: DINCREMENT,
        payLoad: value
    };
};

//decrement action
export const decrement = (value) => {
    return {
        type: DDECREMENT,
        payLoad: value
    };
};