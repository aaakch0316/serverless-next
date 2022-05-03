import { HYDRATE } from "next-redux-wrapper";
import * as t from "../types";

const initialState ={
    language: "",
    text: "",
    model: "",
    token: ""
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
			return { ...state, ...action.payload };
        case t.GET_VIDEO:
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
    
}

export default mainReducer;