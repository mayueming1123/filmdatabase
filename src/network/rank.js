import {requestByData} from "./request";
import {request} from "./request";
export  function getRank(data) {
    return requestByData(
        {
            url: '/order/',
            data: {
                order: data,
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
