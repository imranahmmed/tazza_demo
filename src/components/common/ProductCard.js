import React, { useState } from 'react'
import Img from '../layouts/Img'
import Div from '../layouts/Div'
import { BsBasketFill } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { HiOutlinePlayPause } from 'react-icons/hi2'
import { DiGitCompare } from 'react-icons/di'
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'

import Button from '../layouts/Button'
import Badge from './Badge'
import Discountprice from './Discountprice'
import Rating from './Rating'


const ProductCard = ({ className, src, productName, price, currancy, discount, discountPrice, unit, badge, badgeTitle, outOfStock }) => {
    let [fevrt, setFevrt] = useState(false);
    let [addRemoveCart, setAddRemoveCart] = useState(false);

    return (
        <Div className={className}>
            <Div className='group bg-white p-3 text-center rounded-md border-transparent border relative hover:border-primary duration-300 cursor-pointer overflow-hidden'>
                <Img className='border-b border-border w-full' src={src}></Img>
                <Rating ratingStar={3} ratingNumber='75' className='rating flex gap-1 justify-center my-3 items-center' />
                <Div className='product-content capitalize text-sub-heading text-base font-medium text-center'>
                    <h6>{productName}</h6>
                </Div>
                <Div className='product-price text-center text-base font-medium'>
                    <h6> {discount && <Discountprice currancy={currancy} discountPrice={discountPrice} />} <span className='text-primary'>{currancy}{price}<small>/{unit}</small></span></h6>
                </Div>

                {
                    addRemoveCart
                        ?
                        <Button className='product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-google text-white rounded text-base font-normal duration-300 group-hover:bg-primary group-hover:text-white'>
                            <BiTrash className='text-base' />
                            <span className='text-base'>Remove</span>
                        </Button>
                        :
                        <Button className='product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-border rounded text-base font-normal duration-300 group-hover:bg-primary group-hover:text-white'>
                            <BsBasketFill className='text-base' />
                            <span className='text-base'>Add</span>
                        </Button>
                }


                {badge && <Badge title={badgeTitle} className='product-label w-1/4 absolute top-3 left-3' />}
                {
                    fevrt
                        ?
                        <span href="#" onClick={() => { setFevrt(!fevrt) }} className='addedToFav absolute top-[4%] right-[10%] text-xl text-primary'><BsSuitHeartFill /></span>
                        :
                        <span href="#" onClick={() => { setFevrt(!fevrt) }} className='addToFav absolute top-[4%] right-[10%] text-xl text-gray-chalk'><BsSuitHeart /></span>
                }

                <Div className='product-widget flex gap-3 items-center justify-center absolute top-3/4 left-2/4 translate-x-[-50%] translate-y-[-50%] duration-300 ease-in invisible group-hover:visible group-hover:top-2/4'>
                    <a href="#" className='product-video w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><DiGitCompare /></a>
                    <a href="#" className='product-video w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><HiOutlinePlayPause /></a>
                    <a href="#" className='product-view w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><AiFillEye /></a>
                </Div>

                {outOfStock && <Div className='out_Of_Stock w-full h-full absolute top-0 left-0 bg-white-transparent flex items-center justify-center'>
                    <h6 className='w-full bg-yellow text-white py-4'>Out Of Stock</h6>
                </Div>}
            </Div>
        </Div>
    )
}

export default ProductCard