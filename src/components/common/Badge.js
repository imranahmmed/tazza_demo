import React from 'react'
import Div from '../layouts/Div'

const Badge = ({title, className}) => {
    return (
        <Div className={className}>
            {/* <label className='bg-primary text-white my-1 py-1 text-sm rounded block'>{title}</label> */}
            {/* <label className='bg-orange text-white my-1 py-1 text-sm rounded block'>5.00%</label> */}
            <label className='bg-purple text-white my-1 py-1 text-sm rounded px-3'>{title}</label>
        </Div>
    )
}

export default Badge