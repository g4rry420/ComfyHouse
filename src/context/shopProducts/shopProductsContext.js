import React, { createContext, useReducer, useState } from 'react'

import shopByDepartment from "./home-data"
import { cartReducer } from "../reducers/cart-reducer/cart-reducer"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {
    const [products, setProducts] = useState(shopByDepartment);

    const [cartHidden, setCartHidden] = useState(true);

    const [cart, dispatchCart] = useReducer(cartReducer, [])


    return (
        <ShopProductsContext.Provider value={{ products, dispatchCart, cartHidden, setCartHidden, cart  }}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider