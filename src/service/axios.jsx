import axios from 'axios'
import { BASE_URL } from '../contants/url';

axios.defaults.baseURL = BASE_URL; //BASE URL

axios.interceptors.request.use(function (axios_config) {
    axios_config.headers.token = localStorage.getItem('token')
    return axios_config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axios
