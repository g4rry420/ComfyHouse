import React from 'react'
import { Route } from "react-router-dom"

import './sub-department.styles.css'
import CategoryHeader from "../../components/category-header/category-header.component.jsx"
import CategoryMainSection from '../../components/category-mainSection/category-mainSection.component'
import ItemsPreviewContainer from '../items-preview-container/items-preview-container.component'

function SubDepartment({ match }) {
    return (
        <div>
            <Route exact path={`${match.path}`} component={CategoryHeader} />
            <Route exact path={`${match.path}`} component={CategoryMainSection} />
            <Route exact path={`${match.path}/:itemPreview`} component={ItemsPreviewContainer} />
        </div>
    )
}

export default SubDepartment