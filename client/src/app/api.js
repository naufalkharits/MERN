import axios from "axios";

// server
export const server = axios.create({
    baseURL: "http://localhost:5000",
});
// vehicle
export const vehicle = axios.create({
    baseURL: process.env.REACT_APP_MOCKAPI_API_URL,
});
// cloudinary
export const cloudinary = axios.create({
    baseURL: process.env.REACT_APP_CLOUDINARY_API_URL,
});
