import React from 'react'

import ItemsPreview from '../../components/items-preview/items-preview.component'
import Heading from "../Heading/heading.component"

export default function ItemPreviewSubContainer({ location: {state}}) {
    return (
        <div>
            <Heading 
                title={state.title}
                display="display-4" textCase="text-uppercase" h1="heading-in-items-preview-container" />
            <ItemsPreview state={state} />
        </div>
    )
}
