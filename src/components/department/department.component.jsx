import React, {useContext} from 'react'

import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import "./department.styles.css"
import DepartmentItem from '../department-item/department-item.component';

function Department() {
    const { products } = useContext(ShopProductsContext)
    return (
        <div className="row">
            {products.map( ({ id, ...otherProps  }) => {
                return (
                    <DepartmentItem key={id} {...otherProps} />
                )
            })}
        </div>
    )
}

export default Department