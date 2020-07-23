import React  from 'react'
import { Route } from "react-router-dom"

import "./items-preview-container.styles.css"
import ItemPreviewSubContainer from '../../components/items-preview-sub-container/items-preview-sub-container.component'
import IndividualItemContainer from '../individual-item-container/individual-item-container.component'

function ItemsPreviewContainer({ match }) {

    return (
        <div>
            <Route exact path={`${match.path}`} component={ItemPreviewSubContainer} />
            <Route path={`${match.path}/:id`} component={IndividualItemContainer} />    
        </div>
    )
}

export default ItemsPreviewContainer