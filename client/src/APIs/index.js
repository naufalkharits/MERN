// import "dotenv/config";
import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_MOCKAPI_API_URL,
});
