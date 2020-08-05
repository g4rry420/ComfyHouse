import React, { lazy, Suspense } from 'react'
import { Route } from "react-router-dom"

import Spinner from "../../components/spinner/spinner.component"

const IndividualItem = lazy(() => import("../../components/individual-item/individual-item.component"));

export default function IndividualItemContainer({ match}) {
    return (
        <div>
        <Suspense fallback={<Spinner/>}>
            <Route path={match.path} component={IndividualItem} />
        </Suspense>
        </div>
    )
}
