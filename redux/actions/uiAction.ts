import types  from '../types';

export const setError = ( err:string ) => ({
    type: types.UI_SET_ERROR,
    payload: err
});

export const removeError = () => ({
    type: types.UI_REMOVE_ERROR
});

export const startLoading = () => ({
    type: types.UI_SET_LOADING
})
export const finishLoading = () => ({
    type: types.UI_REMOVE_LOADING
})