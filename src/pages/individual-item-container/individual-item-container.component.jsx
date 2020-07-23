import React from 'react'
import { Route } from "react-router-dom"

import IndividualItem from '../../components/individual-item/individual-item.component'

export default function IndividualItemContainer({ match }) {
    return (
        <div>
           <Route path={match.path} component={IndividualItem} />
        </div>
    )
}
