import React from 'react'

import CategoryHeader from "../category-header/category-header.component"
import CategoryMainSection from '../category-mainSection/category-mainSection.component'

export default function CategoryContainer({ location: {state}}) {

    return (
        <div>
            <CategoryHeader state={state} />
            <CategoryMainSection state={state} />
        </div>
    )
}
