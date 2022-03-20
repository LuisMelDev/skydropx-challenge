import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const axiosConfig = axios.create({
    baseURL: "https://api-demo.skydropx.com/v1",
    headers:{
        "Content-Type": "application/json",
        Authorization: `Token token=${API_KEY}`,
    }
})