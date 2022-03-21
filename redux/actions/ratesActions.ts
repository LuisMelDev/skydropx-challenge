import types from "../types"

export const setRates = (payload:any) => ({
    type: types.SET_RATES,
    payload: payload
})

export const removeRates = () => ({
    type: types.REMOVE_RATES,
})