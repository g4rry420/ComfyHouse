import React, {useContext} from 'react'

import "./individual-item.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import Heading from "../Heading/heading.component"

export default function IndividualItem({ match }) {
    console.log(match)

    const { products } = useContext(ShopProductsContext)
    const individualItem = 
        products.find(({routeName}) => routeName === match.params.particularDepartment)
            .items.find(({id}) => id).items.find(({routeName}) => routeName === match.params.itemPreview)
            .items.find(({id}) => id.toString() === match.params.id)
    
    const state = individualItem
    console.log(individualItem)     

    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="individual-item-img-container">
                        <img src={state.item[0].largeImage1} alt=""/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="individual-item-right-side-container">
                        <Heading title={state.title} display="display-5"
                            h1="heading-in-individual-item"  />
                        <h4 className="display-4 text-center my-5 text-uppercase"> cad ${state.price}</h4>
                        <button className="btn btn-cart">
                            <div className="p-2">Add to cart</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
