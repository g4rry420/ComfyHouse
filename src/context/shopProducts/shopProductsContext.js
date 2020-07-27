import React, { createContext, useReducer, useState } from 'react'

import shopByDepartment from "./home-data"
import {productsReducer} from "../reducers/products-reducer/products-reducer"
import { cartReducer } from "../reducers/cart-reducer/cart-reducer"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {
    const [products, dispatchProduct] = useReducer(productsReducer ,shopByDepartment);

    const [cartHidden, setCartHidden] = useState(true);

    const [cart, dispatchCart] = useReducer(cartReducer, [])


    return (
        <ShopProductsContext.Provider value={{ products, dispatchCart, cartHidden, setCartHidden, cart  }}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider