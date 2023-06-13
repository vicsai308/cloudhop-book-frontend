import React from 'react'

const Alert = (props) => {
    const { variantType, alertHeading, alertMessage } = props;
    return (
        <div className="mb-3" style={{ height: "55px" }}>
            <div className={`alert alert-${variantType} alert-dismissible fade show`} role="alert">
                <strong>{alertHeading}</strong> {alertMessage}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert
