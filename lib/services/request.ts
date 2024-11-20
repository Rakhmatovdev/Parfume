import axios from 'axios';

const request = axios.create({
    baseURL: 'https://parfumeapi.pythonanywhere.com/api/v1',
    timeout: 10000, // 10 soniya kutish vaqti
    headers: {
        'Content-Type': 'application/json',
    },
});

export default request;
