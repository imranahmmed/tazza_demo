import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ children, itemContent, className, href }) => {
    return (
        <li className={className}>
            <Link to={href} className='flex items-center flex-wrap'>{itemContent} {children}</Link>
        </li>
    )
}

export default ListItem