import React from 'react'

const Div = ({ children, className, onClick }) => {
    return (
        <div onClick={onClick} className={className}>
            {children}
        </div>
    )
}

export default Div