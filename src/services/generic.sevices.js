import axios from 'axios';

const  API_URL = "http://localhost:7000/api"

export const request = async ({url, method, data}) => {
    const response = await axios[method](`${API_URL}/${url}`, data)
    //console.log(response.data)
    return response.data
}