import React, {useContext} from 'react'

import CategoryHeader from "../category-header/category-header.component"
import CategoryMainSection from '../category-mainSection/category-mainSection.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"


export default function CategoryContainer({match}) {
    const { products } = useContext(ShopProductsContext)
    const SubDepartment = products.find(({routeName}) => routeName === match.params.particularDepartment)
    
    return (
        <div>
            <CategoryHeader state={SubDepartment} />
            <CategoryMainSection state={SubDepartment} />
        </div>
    )
}
