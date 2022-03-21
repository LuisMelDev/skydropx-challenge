import types from "../types"
import { createShipment } from "services";
import { startLoading, finishLoading, setError, removeError } from './uiAction';

export const startAddShipment = (body: object) => (dispatch:any) => {

    dispatch(startLoading())
    dispatch(removeError())

    createShipment(body)
            .then((resp) => {
                dispatch(finishLoading());
                dispatch(addShipment(resp.data.data));
            })
            .catch((error) => {
                dispatch(finishLoading());
                dispatch(setError(error.response.data.message));
                console.log(error.response);
            });
}


export const addShipment = (payload:any) => ({
    type: types.ADD_SHIPMENT,
    payload: payload
})

export const removeShipment = () => ({
    type: types.REMOVE_SHIPMENT,
})