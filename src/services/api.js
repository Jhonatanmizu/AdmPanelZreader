import axios from 'axios'
import Cookie from "js-cookie";


const api = axios.create({
    baseURL: 'https://api.zreader.ecompjr.com.br/api',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        Access: "application/json",
        Authorization: "Bearer " + Cookie.get("_app_token")
    },
});

export default api