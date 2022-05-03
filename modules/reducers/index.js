import { combineReducers } from "redux";
import testReducer from "./test"
import getVideoReducer from "./getVideo"

const rootReducer = combineReducers({
    test: testReducer,
    getVideo: getVideoReducer,
})

export default rootReducer;