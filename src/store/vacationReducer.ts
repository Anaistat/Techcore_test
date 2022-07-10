import {Vacation} from "../types";
import users from "../users";

const defaultCards = [
    {
    location: 'Belarus',
    isDefault: true,
    users: users
    },
    {
        location: 'USA',
        isDefault: false,
        users: users
    },
    {
        location: 'Poland',
        isDefault: false,
        users: users
    }]

export const vacationReducer = (state:Vacation[] = defaultCards, action:any) =>{
    switch (action.type){
        case 'ADD_LOCATION':
            return [...state, action.payload]

        case 'DELETE_CARD':
            return [...state.filter(elem=>elem.location !== action.payload.location)]

        case 'MAKE_DEFAULT':
            [...state].map(e=>{
                if(e.location === action.payload.location){
                    e.isDefault = true
                    console.log(e)
                }
                else{
                    e.isDefault = false
                }
            })
            return [...state]

        default:
            return state
    }
}