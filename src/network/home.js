import {request} from "./request";
import {requestByData} from "./request";
import axios from "axios";
export  function getHomeMultidata() {
    return request(
        {
            url: '/all_search/'
        }
    )
}
export  function getInfo(data) {
    return requestByData(
        {
            url: '/main_search/',
            data: {
                feature: data,
            },
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],

        }
    )
}

// axios(
//     {
//         url: 'http://127.0.0.1/all_search/',
//         methods: 'post',
//     }
// ).then( res => {
//     console.log(res);
// })
