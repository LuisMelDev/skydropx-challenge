import types from '../types';

interface action{
    type: types,
    payload: object
}

const initialState = {
    loading: false,
    msgError: null
}


export const uiReducer = ( state = initialState, action:action ) => {

    switch ( action.type ) {
        case types.UI_SET_ERROR:
            return {
                ...state,
                msgError: action.payload
            }

        case types.UI_REMOVE_ERROR:
                return {
                    ...state,
                    msgError: null
                }

        case types.UI_SET_LOADING:
            return {
                ...state,
                loading: true
            }
 
        case types.UI_REMOVE_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }

}