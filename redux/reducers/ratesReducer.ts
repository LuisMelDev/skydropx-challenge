import types from '../types' 

const initialState = {
    rates: [],
}


export const ratesReducer = (state = initialState, action:any) => {

    switch(action.type){
        case types.SET_RATES:
            return {
                ...state,
                rates:action.payload,
            }
        case types.REMOVE_RATES:
            return {
                rates: {}
            }
        default:
            return state
    }
}
