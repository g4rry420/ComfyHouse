import React from 'react'
import { Route } from "react-router-dom"

import './sub-department.styles.css'
import ItemsPreviewContainer from '../items-preview-container/items-preview-container.component'
import CategoryContainer from '../../components/category-container/category.container.component'

function SubDepartment({ match }) {
    return (
        <div>
            <Route exact path={match.path} component={CategoryContainer} />
            <Route path={`${match.path}/:itemPreview`} component={ItemsPreviewContainer} /> 
        </div>
    )
}

export default SubDepartment