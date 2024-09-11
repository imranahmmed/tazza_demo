import React from 'react'

const Input = ({ onClick, type, name, placeholder, className, id }) => {
    return (
        <input onClick={onClick} type={type} name={name} id={id} placeholder={placeholder} className={className} />
    )
}

export default Input