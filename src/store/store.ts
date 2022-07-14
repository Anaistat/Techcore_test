import {combineReducers, createStore} from "redux";
import {vacationReducer} from "./vacationReducer";
import {addUsersReducer} from "./addUsersReducer";


const appReducer = combineReducers({
    vacation: vacationReducer,
    addUsers: addUsersReducer
})

export const store = createStore(appReducer)