import { AxiosResponse } from "axios";
import { axiosConfig as client } from "config/axiosConfig";

export const createLabel = (id:string) =>{
    return client.post('/labels', {
        rate_id: parseInt(id),
        label_format: "pdf",
    })
}

export const getLabel = (id:string) =>{
    return client.get(`/labels/${id}`)
}