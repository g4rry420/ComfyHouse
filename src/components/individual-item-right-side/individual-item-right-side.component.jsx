import React, { useContext } from 'react'

import "./individual-item-right-side.styles.css"
import Heading from "../Heading/heading.component"
import CustomButton from '../custom-button/custom-button.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import { addItemToCart } from "../../context/reducers/cart-reducer/cart-actions"

export default function IndividualItemRightSide({ state }) {
    const { dispatchCart } = useContext(ShopProductsContext)
    return (
        <div className="individual-item-right-side-container">
            <Heading title={state.title} display="display-5"
                h1="heading-in-individual-item"  />
            <h4 className="display-4 text-center my-5 text-uppercase"> cad ${state.price}</h4>
            
            <div onClick={() => addItemToCart(dispatchCart, state)}>
                <CustomButton title="Add to cart" button="btn-cart" />
            </div>

            <h5 className="display-4 my-5">Description</h5>
            <p> {state.item[0].description} </p>
            <h5 className="display-4 my-4">Product Details</h5>
        </div>
    )
}
