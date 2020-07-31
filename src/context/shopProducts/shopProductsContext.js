import React, { createContext, useReducer, useState,useEffect } from 'react'
import logger from "use-reducer-logger"

import { cartReducer } from "../reducers/cart-reducer/cart-reducer"
import { productReducer } from "../reducers/products-reducer/products-reducer"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils" 

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {
    const objectsToArray = (dataForObjects) => {
        return Object.keys(dataForObjects).map(key => dataForObjects[key])
    };

    const sortFunction = () => (a,b) => {
        return a.id - b.id || a.title.localCompare(b.title);
    }

    const [products, dispatchProducts] = useReducer(
        process.env.NODE_ENV === "development" ? logger(productReducer) : productReducer
        ,{ shopProducts: null });

    const [cartHidden, setCartHidden] = useState(true);

    const [currentUser, setCurrentUser] = useState(null)

    const [cart, dispatchCart] = useReducer(
        process.env.NODE_ENV === "development" ? logger(cartReducer) : cartReducer
        , [], () => {
        const localData = localStorage.getItem("Cart_Products");
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("Cart_Products", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
 
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            setCurrentUser(userAuth);
         })
    },[])


    return (
        <ShopProductsContext.Provider 
            value={{products,currentUser, objectsToArray,sortFunction, dispatchProducts, dispatchCart, cartHidden, setCartHidden, cart}}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider