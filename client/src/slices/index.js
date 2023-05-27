import bookReducer from "./bookslice";
import {combineReducers} from "react-redux"

const rootReducer=combineReducers({book:bookReducer})

export default rootReducer;