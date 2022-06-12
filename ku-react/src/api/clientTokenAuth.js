import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (token, cancelToken) =>create({
    baseURL:"https://cae-bootstore.herokuapp.com",
    headers:{
        Authorization:"Bearer "+token
    },
    cancelToken
})

export default apiClient