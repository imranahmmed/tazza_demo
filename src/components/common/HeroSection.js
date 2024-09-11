import React from 'react'
import { Link } from 'react-router-dom'
import Div from '../layouts/Div'

const HeroSection = ({pageTitle}) => {
    return (
        <Div className='bg-hero-bg relative text-white text-center z-[1] py-28 before:absolute before:h-full before:w-full before:bg-gradient-to-l from-darkBlue-transparent to-green-transparent before:z-[-1] before:opacity-50 before:top-0 before:left-0'>
            <h2 className='text-3xl mb-4 uppercase font-medium tracking-wider'>{pageTitle}</h2>
            <p><Link to='/'>Home</Link> / <Link to={window.location.pathname} className='capitalize'>{window.location.pathname.split("/")[1]}</Link> </p>
        </Div>
    )
}

export default HeroSection