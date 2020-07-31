import React from 'react'

import "./with-spinner.styles.css"

const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="spinner-overlay">
            <div className="spinner-container">
            </div>
        </div>
    ) : (
        <WrapperComponent {...otherProps} />
    )
}

export default WithSpinner