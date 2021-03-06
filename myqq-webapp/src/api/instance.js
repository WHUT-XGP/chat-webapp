// 配置axios实例
import axios from 'axios'
const instance = axios.create({
    // baseURL: 'http://localhost:7001',
    baseURL: 'http://47.102.212.191:7001',
    // baseURL: 'http://192.168.1.104:7001',
    // baseURL: 'http://10.116.205.130:7001',
    timeout: 5000,
})
// 配置响应拦截器
instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    }
)

export {
    instance
}