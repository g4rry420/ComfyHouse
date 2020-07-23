import React from 'react'
import { Link } from "react-router-dom";

import "./department-item.styles.css"

function DepartmentItem(props) {
    const { bigImageUrl, title, routeName } = props;
  
    return (
        <div className="col-md-3 col-12 my-4">

            <Link to={`${routeName}`} className="link">
                <div className="department-product">
                    <div className="img-container text-center">
                        <img src={bigImageUrl} alt="product" />
                    </div>
                    <h3 className="text-center department-product-h3">{title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default DepartmentItem