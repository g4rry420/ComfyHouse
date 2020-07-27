import React, { useContext } from 'react'

import "./cart-dropdown.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function CartDropdown() {
    const { cart } = useContext(ShopProductsContext);
    console.log(cart);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                
            </div>
        </div>
    )
}