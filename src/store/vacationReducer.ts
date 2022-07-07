interface Vacation{
    vacation: []
}

export const vacationReducer = (state:[] = [], action:any) =>{
    switch (action.type){
        case 'ADD_LOCATION':
            return [...state, action.payload]

        case 'DELETE_CARD':
            return [...state.filter(elem=>elem[0] !== action.payload)]

        default:
            return state
    }
}