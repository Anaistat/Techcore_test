import {combineReducers, createStore} from "redux";
import {vacationReducer} from "./vacationReducer";
import {breadCrumbsReducer} from "./breadCrumbsReducer";


const appReducer = combineReducers({
    vacation: vacationReducer,
    breadCrumbs: breadCrumbsReducer
})

export const store = createStore(appReducer)