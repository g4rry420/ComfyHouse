import React, {useContext} from 'react'

import "./cart-icon.styles.css"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartDropdown } from "../../context/reducers/cart-reducer/cart-actions"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"



export default function CartIcon() {
    const { cartHidden, setCartHidden }  = useContext(ShopProductsContext)
    return (
        <div className="cart-icon-container" onClick={() => setCartHidden(!cartHidden)}>
            <ShoppingIcon className="cart-icon" />
            <span>0</span>
        </div>
    )
}
