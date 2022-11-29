import axios from 'axios';


const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (path, optional = {}) => {
    const response = await request.get(path, optional);
    return response.data;
}

export default request;