import React, { useContext } from 'react'

import "./checkout.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

function CheckoutPage() {
    const { cart } = useContext(ShopProductsContext);
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cart.map( ({id, ...otherProps} ) => (
                    <CheckoutItem key={id} {...otherProps} id={id} />
                ))
            }

            <div className="total">
                <span className="text-uppercase">Total: ${cart.reduce((accQty, item) => {
                    return (accQty + item.qty * item.price).toFixed(2);
                }, 0)} </span>
            </div>
        </div>
    )
}

export default CheckoutPage