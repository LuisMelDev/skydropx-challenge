import { axiosConfig as client } from "config/axiosConfig";

export const createShipment = (body: object) => {
    return client.post('/shipments', body)
}

export const getShipment = (id: string) => {
    return client.get(`/shipments/${id}`)
}
