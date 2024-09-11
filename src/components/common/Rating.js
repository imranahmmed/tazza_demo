import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import Div from '../layouts/Div'

const Rating = ({ className, ratingStar, ratingNumber }) => {
    return (
        <Div className={className}>
            <div className='flex items-center gap-2'>
                {ratingStar === 5 &&
                    <>
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                    </>
                }
                {ratingStar === 4 &&
                    <>
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-gray' />
                    </>
                }
                {ratingStar === 3 &&
                    <>
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                    </>
                }
                {ratingStar === 2 &&
                    <>
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                    </>
                }
                {ratingStar === 1 &&
                    <>
                        <BsStarFill className='text-yellow' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                    </>
                }
                {ratingStar === 0 &&
                    <>
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                        <BsStarFill className='text-gray' />
                    </>
                }


            </div>
            <div>
                <span href="#" className='text-gray text-sm'>({ratingNumber})</span>
            </div>
        </Div>
    )
}

export default Rating