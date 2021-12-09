import axios from "axios";
export function request(config) {
        const  instance = axios.create({
            baseURL: 'http://127.0.0.1:8000',
            method: 'post',
            timeout: 50000,
        })
    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    },error => {
        console.log(error)
    })
        return instance(config)
}


export function requestByData(config) {
    const  instance = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        method: 'post',
        timeout: 5000,
    })
    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    },error => {
        console.log(error)
    })

    return instance(config)
}
