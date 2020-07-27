import React from 'react'

import "./custom-button.styles.css"

export default function CustomButton({ title, button }) {
    return (
        <button className={`btn custom-button ${button}`}>
            <div className="p-2"> {title} </div>
        </button>
    )
}
