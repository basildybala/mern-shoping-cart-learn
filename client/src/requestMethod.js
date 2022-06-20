import axios from "axios";

const BASE_URL= "http://localhost:5000/api";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTIwODQ1OGNlMDNhM2EwY2UwOGRmMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTU3MDQ1OTcsImV4cCI6MTY1NTk2Mzc5N30.6TKevkuh01KDwX6nSC0Iun461xwx-uFflLhoDsIZZrE"

export const pucblicRequest= axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})