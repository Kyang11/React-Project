import apiClientNoAuth from './clientNoAuth';
import apiClientTokenAuth from './clientTokenAuth';

const endpoint ='/user'; 

const post= async (data, cancelToken)=>{
    console.log('post data: ',data)
    const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
    console.log('post',response.ok)
    return response.ok
}

const put= async (token, data, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint, data);
    return response.ok
}

const del= async (token, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint);
    return response.ok
}

export default {
    post,
    put,
    del
}
