import {createContext, useEffect, useReducer, useState} from "react";
import {shopReducer, cartActions} from '../reducers/shopReducer';

export const AppContext = createContext();

const AppContextProvider=({children})=>{
    
    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }

    const getCartFromLS = ()=>{
        let cart = localStorage.getItem('cart')
        if (cart){
            return JSON.parse(cart)
        }
    }

    const [user, _setUser] = useState(getUserFromLS())
    const [alert, setAlert]=useState({});
    const [cart, dispatch]=useReducer(shopReducer,getCartFromLS()??[])

    useEffect(
        ()=>{
            if (cart.length>0){
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        },[cart]
    )


    const setUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }



    const getBookFromLS = ()=>{
        let book = localStorage.getItem('book')
        if (book){
            return JSON.parse(book)
        }
    }
    const [book, _setBook] = useState(getBookFromLS())


    const setBook = (book)=>{
        localStorage.setItem('book', JSON.stringify(book))
        _setBook(book)
    }

    const values = {
        user,
        setUser,
        alert,
        setAlert,
        book,
        setBook,
        cart,
        addToCart:(item)=>{
            dispatch({type: cartActions.addToCart, item})
        },
        addBulkToCart:(item)=>{
            dispatch({type: cartActions.addBulkToCart, item})
        },
        removeFromCart:(item)=>{
            dispatch({type:cartActions.removeFromCart, item})
        },
        removeAllFromCart:(item)=>{
            dispatch({type:cartActions.removeAllFromCart, item})
        },
        emptyCart:()=>{dispatch({type:cartActions.emptyCart})}
    }

    




    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

