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
    let formData = new FormData();
    formData.append("feature",data)
    return requestByData(
        {
            url: '/all_search/',
            data: formData,
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
