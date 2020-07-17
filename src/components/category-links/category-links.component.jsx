import React from 'react'
import { Link } from "react-scroll";

import "./category-links.styles.css"

export default function CategoryLinks({ item }) {
    return (
        <div className="col-md-4 my-2">
            <Link className="in-page-links" activeClass="active"
                to={item.id.toString()}
                spy={true}
                smooth={true}
                
                duration= {300}> {item.title} </Link>
        </div>
    )
}
