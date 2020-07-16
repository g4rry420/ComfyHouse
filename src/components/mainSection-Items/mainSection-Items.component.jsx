import React from 'react'
import { Link } from "react-router-dom"

import "./mainSection-Items.styles.css"

export default function MainSectionItems({ item }) {
    return (
        <div className="col-md-2 my-5 py-4 mainSection-items-container">
            <Link to="/">
                <div className="mainSections-items text-center">
                    <div className=" text-center mainSections-Image-container">
                        <img src={item.imageUrl}  />
                    </div>
                    <div className="mainSection-items-heading">
                        <p className="">{item.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
