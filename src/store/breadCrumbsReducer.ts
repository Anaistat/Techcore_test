import {Breadcrumbs} from "../types";

export const breadCrumbsReducer = (state:Breadcrumbs[] = [{page: ''}], action:any) =>{
     switch(action.type){
         // case 'ADD_PAGE':
         //     return [...state, action.payload]
         default:
             return [...state]
     }
}