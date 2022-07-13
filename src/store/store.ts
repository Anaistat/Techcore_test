import {combineReducers, createStore} from "redux";
import {vacationReducer} from "./vacationReducer";
import {breadCrumbsReducer} from "./breadCrumbsReducer";
import {addUsersReducer} from "./addUsersReducer";


const appReducer = combineReducers({
    vacation: vacationReducer,
    breadCrumbs: breadCrumbsReducer,
    addUsers: addUsersReducer
})

export const store = createStore(appReducer)