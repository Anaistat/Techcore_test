export const addUsersReducer = (state:string[] = [], action:any) =>{
    switch (action.type){
        case 'ADD_USERS':
            return action.payload

        default:
            return [...state]
    }
}