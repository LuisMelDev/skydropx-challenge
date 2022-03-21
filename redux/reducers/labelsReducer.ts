import types from '../types' 

const initialState = {
    label: {},
}

export const labelsReducer = (state = initialState, action:any)=> {
    
    switch(action.type){
        case types.ADD_LABEL:
            return {
                ...state,
                label:action.payload
            }
        case types.REMOVE_LABEL:
            return {
                label:{}
            }
        default:
            return state
    }
}