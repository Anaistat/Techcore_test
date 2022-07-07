


interface Vacation{
    vacation: string[]
}

export const vacationReducer = (state:string[] = [], action:any) =>{
    switch (action.type){
        case 'ADD_LOCATION':
            return [...state, action.payload]
        default:
            return state
    }
}