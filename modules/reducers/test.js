import { HYDRATE } from "next-redux-wrapper";
import * as t from "../types";

const initialState ={
    token: '',
    selectedEmployee: undefined,
	isModalOpen: false,
    loading: false
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
			return { ...state, ...action.payload };
        case t.TEST_START:
            return {
                ...state, token: action.payload
            }
        default:
            return state;
    }
    
}

export default mainReducer;