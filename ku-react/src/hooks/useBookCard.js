import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';


export default function useBook(id){
    const [books, setBooks]=useState([])

    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getBooks=async()=>{
                const response = await apiBook.getOneBook(id,source.token)
                console.log('useBook success ', id, response.books)

                setBooks(response)
                console.log('useBook success ', id)
            }
            getBooks()
            return ()=>{source.cancel();}

        },
        [id]
    )
    console.log('useBook',books)
    return books
}