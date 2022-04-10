import axios from "axios";

export default axios.create({
    //baseURL: "https://6251cbac7f7fa1b1dddf25e4.mockapi.io/api/v1/",
    baseURL: "http://localhost:8085/api/v1/",
    headers: {
        "Content-type": "application/json"
    }
});
