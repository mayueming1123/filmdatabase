import {requestByData} from "./request";
export  function getRank(data) {
    let formData = new FormData();
    formData.append("feature",data)
    return requestByData(
        {
            url: '/order/',
            data: formData,
        }
    )
}
