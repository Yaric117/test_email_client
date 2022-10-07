import store from './store'
import axios from 'axios'

const axiosConfig = {
    baseURL: `${store.getters.server}/api/v1/`,
    timeout: 50000,
    headers: {
        Authorization: store.getters.token,
    }
}
const api = axios.create(axiosConfig)

/** interceptors config */
const config = config => {
    config.headers = Object.assign(config.headers, {
        Authorization: store.getters.token,
    })
    return config
}

api.interceptors.request.use(config)

/** interceptors response */
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
