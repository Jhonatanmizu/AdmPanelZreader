import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.zreader.ecompjr.com.br/api',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        Access: "application/json",
    },
});

export default api