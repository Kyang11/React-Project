import apiClientNoAuth from './clientNoAuth'

const endpoint= '/book'
const get = async (cancelToken) =>{
    let error;
    let books;
    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if (response.ok){
        books=response.data.books
    }else{
        error = "An Unexpected Error has Occured. Please try again later."
    }
    return{
        error, 
        books
    }
}

const getOneBook = async (id, cancelToken) =>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+ id);
    if (response.ok){
        books=response.data
        console.log('getOneBook ',books)
    }else{
        error = "An Unexpected Error has Occured. Please try again later."
    }
    return{
        error, 
        books
    }
}
export default {
    get,
    getOneBook

}