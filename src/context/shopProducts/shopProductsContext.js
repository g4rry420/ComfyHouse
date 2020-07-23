import React, { createContext, useState } from 'react'

import shopByDepartment from "./home-data"

export const ShopProductsContext = createContext();

const ShopProductsContextProvider = (props) => {
    const [products, setProducts] = useState(shopByDepartment);

    return (
        <ShopProductsContext.Provider value={{ products  }}>
            {props.children}
        </ShopProductsContext.Provider>
    )
}

export default ShopProductsContextProvider