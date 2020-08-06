import React, { createContext, useReducer, useState,useEffect } from 'react'
import logger from "use-reducer-logger"

import { cartReducer } from "../reducers/cart-reducer/cart-reducer"
import { productReducer } from "../reducers/products-reducer/products-reducer"
import { auth, createUserProfileDocument,firestore,convertShopProductsSnapshotToMap  } from "../../firebase/firebase.utils"
import { updateShopProducts } from "../reducers/products-reducer/products-actions" 

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {  
    const [loading ,setLoading] = useState(true);

    const [cartHidden, setCartHidden] = useState(true);

    const [currentUser, setCurrentUser] = useState(null);

    const [products, dispatchProducts] = useReducer(
        process.env.NODE_ENV === "development" ? logger(productReducer) : productReducer
        ,{ shopProducts: null });

    const [cart, dispatchCart] = useReducer(
        process.env.NODE_ENV === "development" ? logger(cartReducer) : cartReducer
        , [], () => {
        const localData = localStorage.getItem("Cart_Products");
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        const  collectionRef = firestore.collection("shopProducts").orderBy("id");
        
        collectionRef.get().then(async snapshot => {
            const shopProductsMap = await convertShopProductsSnapshotToMap(snapshot);
            updateShopProducts(dispatchProducts, shopProductsMap);
            setLoading(false);
        })
    }, [dispatchProducts])

    useEffect(() => {
        localStorage.setItem("Cart_Products", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(async userAuth => {
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

         return () => {
             unsubcribe();
         }

    },[])

    const objectsToArray = (dataForObjects) => {
        return Object.keys(dataForObjects).map(key => dataForObjects[key])
    };

    const sortFunction = () => (a,b) => {
        return a.id - b.id || a.title.localCompare(b.title);
    }


    return (
        <ShopProductsContext.Provider 
            value={{products,currentUser, loading, objectsToArray,sortFunction,
                     dispatchProducts, dispatchCart, cartHidden, setCartHidden, cart}}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider