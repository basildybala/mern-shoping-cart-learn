import axios from "axios";

const BASE_URL= "http://localhost:5000/api";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTIwODQ1OGNlMDNhM2EwY2UwOGRmMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTU3OTEwMDMsImV4cCI6MTY1NjA1MDIwM30.ujJHcVhPBrOm6p7Z-KaPe-SombPvm_8HJHwuN1x5_QE"

export const pucblicRequest= axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})