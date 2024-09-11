import React, { Children } from 'react'

const P = ({ children, paraContent, className }) => {
    return (
        <p className={className}>
            {children}
            {paraContent}
        </p>
    )
}

export default P