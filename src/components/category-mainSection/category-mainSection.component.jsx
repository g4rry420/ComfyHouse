import React from 'react'
import { withRouter } from "react-router-dom"

import "./category-mainSection.styles.css"
import MainSectionSideHeading from '../mainSection-side-Heading/mainSection-side-Heading.component'
import MainSectionItems from '../mainSection-Items/mainSection-Items.component'

function CategoryMainSection({ location: {state} }) {
    return (
        <div>
            <div className="margin-in-mainSection my-5">
                <div className="row">
                    <div className="col-md-2">
                        <div className="row">
                        {state.items.map((item) => {
                            return(
                                <MainSectionSideHeading key={item.id} item={item} /> 
                            )
                        })}

                        </div>  
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                        {state.items.map(item => item.items.filter((item, idx) => idx < 6).map((ite) => (
                                
                                <MainSectionItems key={ite.id} item={ite} />
                        )))} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CategoryMainSection)