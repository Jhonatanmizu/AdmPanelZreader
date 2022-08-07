import Cookie from 'js-cookie'
const axiosConfig = {
    headers: {
        'Authorization': `Bearer ${Cookie.get('_app_token')}`
    }
}
export default axiosConfig