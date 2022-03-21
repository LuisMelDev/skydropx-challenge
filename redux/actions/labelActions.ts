import types from "../types"
import { createLabel } from "services";
import { startLoading, finishLoading, setError, removeError } from './uiAction';

export const startAddLabel = (id: string) => (dispatch:any) => {

    dispatch(startLoading())
    dispatch(removeError())

    createLabel(id)
            .then(resp => {
                dispatch(finishLoading());
                if(resp.data.data.attributes.status === "ERROR"){
                    dispatch(setError(resp.data.data.attributes.error_message[0].message));
                    return;
                }
                dispatch(finishLoading());
                dispatch(addLabel(resp.data.data));
            })
            .catch((error) => {
                dispatch(finishLoading());
                dispatch(setError(error.response.data.message));
                console.log(error);
            });
}


export const addLabel = (payload:any) => ({
    type: types.ADD_LABEL,
    payload: payload
})

export const removeLabel = () => ({
    type: types.REMOVE_LABEL,
})