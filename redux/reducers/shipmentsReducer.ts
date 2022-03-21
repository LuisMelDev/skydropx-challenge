import types from '../types' 

const initialState = {
    shipment: {},
}


export const shipmentReducer = (state = initialState, action:any) => {
    switch(action.type){
        case types.ADD_SHIPMENT:
            return {
                ...state,
                shipment:action.payload,
            }
        case types.REMOVE_SHIPMENT:
            return {
                shipment: {}
            }
        default:
            return state
    }
}

