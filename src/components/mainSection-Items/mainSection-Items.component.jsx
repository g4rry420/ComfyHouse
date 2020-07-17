import React from 'react'
import { Link, withRouter } from "react-router-dom"

import "./mainSection-Items.styles.css"

function MainSectionItems({ item, match }) {
    const { imageUrl, title, routeName, items } = item
    return (
        <div className="col-md-2 my-5 py-4 mainSection-items-container">
            <Link to={ {pathname: match.url + "/" + routeName, state: { title, items }} } >
                <div className="mainSections-items text-center">
                    <div className=" text-center mainSections-Image-container">
                        <img src={imageUrl}  />
                    </div>
                    <div className="mainSection-items-heading">
                        <p className="">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(MainSectionItems)
