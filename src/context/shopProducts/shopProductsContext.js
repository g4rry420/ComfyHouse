import React, { createContext, useReducer } from 'react'

import shopByDepartment from "./home-data"
import {productsReducer} from "../reducers/products-reducer/products-reducer"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {
    const [products, dispatch] = useReducer(productsReducer ,shopByDepartment);

    return (
        <ShopProductsContext.Provider value={{ products, dispatch  }}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider