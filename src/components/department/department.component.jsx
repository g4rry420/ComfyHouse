import React, {useContext} from 'react'

import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./department.styles.css"

export default function Department() {
    const { products } = useContext(ShopProductsContext)
    
    return (
        <div className="row">
            {products.map( ({ id, bigImageUrl, title }) => {
                return (
                    <div className="col-md-3 col-12 my-4" key={id}>
                        <div className="department-product">
                            <div className="img-container text-center">
                                <img src={bigImageUrl} alt="product" />
                            </div>
                            <h3 className="text-center">{title}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
