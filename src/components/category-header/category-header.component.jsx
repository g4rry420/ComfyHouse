import React from 'react'
import { withRouter } from "react-router-dom"

import "./category-header.styles.css"
import CategoryLinks from '../category-links/category-links.component'

function CategoryHeader({ state }) {
    return (
        <div className="container-fluid background-for-category py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                    <h2 className="display-5 font-weight-bold">{state !== undefined ?  state.title : null}</h2>
                        <div className="row">
                            {
                                state !== undefined ?
                                    state.items.map(item => (
                                        <CategoryLinks key={item.id} item={item} /> 
                                    )) :
                                        null
                            }
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="category-img-container">
                            <img src={state !== undefined ?  state.mainImage : null} alt="product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CategoryHeader)