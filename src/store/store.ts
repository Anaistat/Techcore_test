import {combineReducers, createStore} from "redux";
import {vacationReducer} from "./vacationReducer";


const appReducer = combineReducers({
    vacation: vacationReducer
})

export const store = createStore(appReducer)