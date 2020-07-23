import React from 'react'
import { withRouter } from 'react-router-dom'

import "./items-preview.styles.css"
import ItemsPreviewItem from '../items-preview-item/items-preview-item.component'

function ItemsPreview({ state }) {
    return (
        <section className="container">
            <div className="row">
                {state.items.map((item) => {
                    return (
                        <ItemsPreviewItem key={item.id} items={item} />
                    )
                })}
            </div>
        </section>
    )
}

export default withRouter(ItemsPreview)