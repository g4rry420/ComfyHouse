import React from 'react'
import { Link } from "react-router-dom";

import "./category-links.styles.css"

export default function CategoryLinks({ item }) {
    // console.log(item)
    return (
        <div className="col-md-4 my-2">
            <Link to="11" className="in-page-links"> {item.title} </Link>
        </div>
    )
}
