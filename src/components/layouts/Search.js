import React from 'react'
import Div from './Div'
import { BiSearchAlt } from 'react-icons/bi'

const Search = ({ className, placeholder }) => {
    return (
        <input type="text" placeholder={placeholder} className={className} />
    )
}

export default Search