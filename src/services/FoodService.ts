import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api"

export const listFoods = () => {
    return axios.get(REST_API_BASE_URL + "/foods");
}

export const addFoods = (newFood:object) => {
    return axios.post(REST_API_BASE_URL + "/food/create", newFood)
}