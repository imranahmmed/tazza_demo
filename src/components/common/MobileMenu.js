import React from 'react'
import Div from '../layouts/Div'
import { GoHome, GoListUnordered } from 'react-icons/go'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsSuitHeartFill } from 'react-icons/bs'
import { DiGitCompare } from 'react-icons/di'
const MobileMenu = ({cartSideBarOnClick}) => {
    return (
        <Div className='w-full fixed bottom-0 left-0 text-text bg-white shadow-lg flex items-center justify-around py-3 z-10 lg:hidden'>
            <Div className='mobileMenuItem text-center w-1/5 text-xs flex justify-center items-center flex-col font-medium'>
                <GoHome className='text-base mb-1' />
                <h3>Home</h3>
            </Div>
            <Div className='mobileMenuItem text-center w-1/5 text-xs flex justify-center items-center flex-col font-medium'>
                <GoListUnordered className='text-base mb-1' />
                <h3>Category</h3>
            </Div>
            <Div className='mobileMenuItem text-center w-1/5 text-xs flex justify-center items-center flex-col font-medium' onClick={cartSideBarOnClick}>
                <FaShoppingBasket className='text-base mb-1' />
                <h3>Cart</h3>
            </Div>
            <Div className='mobileMenuItem text-center w-1/5 text-xs flex justify-center items-center flex-col font-medium'>
                <BsSuitHeartFill className='text-base mb-1' />
                <h3>Wishlist</h3>
            </Div>
            <Div className='mobileMenuItem text-center w-1/5 text-xs flex justify-center items-center flex-col font-medium'>
                <DiGitCompare className='text-base mb-1' />
                <h3>Compare</h3>
            </Div>

        </Div>
    )
}

export default MobileMenu