import React, {useContext} from 'react'

import CategoryHeader from "../category-header/category-header.component"
import CategoryMainSection from '../category-mainSection/category-mainSection.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"


export default function CategoryContainer({match, location: {state}}) {
    // const { products } = useContext(ShopProductsContext)
    // const SubDepartment = products.find(({routeName}) => routeName === match.params.particularDepartment)

    return (
        <div>
            <CategoryHeader state={state} />
            <CategoryMainSection state={state} />
        </div>
    )
}
