import React from 'react'
import Div from '../layouts/Div'
import Rating from './Rating'
import Img from '../layouts/Img'
import Discountprice from './Discountprice'
import Button from '../layouts/Button'
import Badge from './Badge'
import { BsBasketFill } from 'react-icons/bs'
import { HiOutlinePlayPause } from 'react-icons/hi2'
import { AiFillEye, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { DiGitCompare } from 'react-icons/di'
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs'

const FeaturedProductCard = ({ className, src, productName, price, currancy, discount, discountPrice, unit, badge, badgeTitle }) => {
    return (
        <Div className={className}>
            <Div className='group flex items-center flex-wrap lg:flex-nowrap bg-white p-4 md:p-6 rounded-md border-transparent border hover:border-primary duration-300 cursor-pointer'>
                <Div className='w-full lg:w-1/3 relative'>
                    <Img src={src}></Img>

                    <a href="#" className='addToFav absolute top-[-2%] right-[3%] text-2xl text-gray-chalk'><BsSuitHeart /></a>
                    <a href="#" className='addedToFav absolute top-[-2%] right-[3%] text-2xl text-primary'><BsSuitHeartFill /></a>
                    {badge && <Badge title={badgeTitle} className='product-label absolute top-[-2%] left-[-3%] text-center' />}

                    <Div className='product-widget flex gap-3 items-center mb-10 justify-center absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-300 ease-in invisible group-hover:visible group-hover:mb-0 group-hover:top-[85%]'>
                        <a href="#" className='product-video w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><DiGitCompare /></a>
                        <a href="#" className='product-video w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><HiOutlinePlayPause /></a>
                        <a href="#" className='product-view w-10 h-10 bg-primary text-white flex items-center justify-center text-xl rounded-sm'><AiFillEye /></a>
                    </Div>
                </Div>
                <Div className='w-full lg:w-2/3 lg:ml-6 lg:pl-6 lg:border-l border-border'>
                    <Div className='product-content capitalize text-sub-heading text-base font-medium text-start'>
                        <h6 className='text-xl'>{productName}</h6>
                    </Div>

                    <Rating ratingStar={4} ratingNumber='75' className='rating flex gap-1 justify-start my-3 items-center' />
                    <Div className='product-price text-left text-base font-medium'>
                        <h6> {discount && <Discountprice currancy={currancy} discountPrice={discountPrice} />} <span className='text-primary'>{currancy}{price}<small>/{unit}</small></span></h6>
                    </Div>
                    <p className='hidden md:block'>Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
                    
                    <Div className='flex items-center justify-center gap-3'>
                        <Button className='product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-border rounded text-base uppercase font-normal duration-300 group-hover:bg-primary group-hover:text-white'>
                            <BsBasketFill className='text-base' />
                            <span className='text-base'>Add</span>
                        </Button>

                        <Button className='product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-border rounded text-base uppercase font-normal duration-300 group-hover:bg-primary group-hover:text-white'>
                            <AiFillHeart className='text-base' />
                            <span className='text-base'>Wishlist</span>
                        </Button>
                    </Div>

                </Div>
            </Div>
        </Div>
    )
}

export default FeaturedProductCard