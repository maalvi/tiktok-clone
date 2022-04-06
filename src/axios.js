import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-clone-muhammad.herokuapp.com/"
});

export default instance;