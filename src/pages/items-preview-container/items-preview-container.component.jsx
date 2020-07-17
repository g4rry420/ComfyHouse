import React from 'react'

import "./items-preview-container.styles.css"
import ItemsPreview from '../../components/items-preview/items-preview.component'
import Heading from "../../components/Heading/heading.component"

function ItemsPreviewContainer({ location: {state}}) {
    return (
        <div>
            <Heading 
                title={state.title} 
                display="display-3" textCase="text-uppercase" h1="heading-in-items-preview-container" />
            <ItemsPreview state={state} />
        </div>
    )
}

export default ItemsPreviewContainer