import React,{useContext} from 'react'

import ItemsPreview from '../../components/items-preview/items-preview.component'
import Heading from "../Heading/heading.component"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function ItemPreviewSubContainer({match}) {

    const { products } = useContext(ShopProductsContext)
    const itemPreviewContainer = 
        products.find(({routeName}) => routeName === match.params.particularDepartment)
            .items.find(({id}) => id).items.find(({routeName}) => routeName === match.params.itemPreview)

    return (
        <div>
            <Heading 
                title={itemPreviewContainer.title}
                display="display-4" textCase="text-uppercase" h1="heading-in-items-preview-container" />
            <ItemsPreview state={itemPreviewContainer} />
        </div>
    )
}
