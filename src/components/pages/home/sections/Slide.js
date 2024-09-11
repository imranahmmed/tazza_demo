import React from 'react'
import Div from '../../../layouts/Div'
import Img from '../../../layouts/Img'
import Container from '../../../layouts/Container';
import Button from '../../../layouts/Button';
import { FaShoppingBasket } from 'react-icons/fa'
import { TbDiscount2 } from 'react-icons/tb'

const Slide = ({src}) => {
    return (
        <Div className='py-12 bg-gradient-to-r from-[#45f76354] to-[#ffc3d024] relative z-[1] before:block before:absolute before:bg-banner-pattern before:top-0 before:left-0 before:w-full before:h-full before:z-[-1] before:opacity-5'>
            <Container className='container mx-auto flex flex-wrap items-center w-full px-4'>
                <Div className='w-full lg:w-5/12'>
                    <h1 className='text-3xl mb-3 lg:text-5xl capitalize font-medium lg:mb-6 text-heading leading-tight'>free home delivery within 24 hours now.</h1>
                    <p className='text-md lg:text-lg text-text text-justify'>
                        Lorem ipsum dolor consectetur adipisicing elit modi
                        consequatur eaque expedita porro necessitatibus eveniet
                        voluptatum quis pariatur Laboriosam molestiae architecto
                        excepturi
                    </p>
                    <Div className='flex gap-3 mt-6'>
                        <Button className='py-2 px-5 lg:py-3 lg:px-7 border-2 border-solid border-primary bg-primary text-white flex items-center rounded-md hover:bg-white hover:text-primary hover:border-primary'> <FaShoppingBasket className='mr-2' /> Shop Now</Button>
                        <Button className='py-2 px-5 lg:py-3 lg:px-7 border-2 border-solid border-primary bg-primary text-white flex items-center rounded-md hover:bg-white hover:text-primary hover:border-primary'> <TbDiscount2 className='mr-2' /> Get Offer</Button>
                    </Div>
                </Div>

                <Div className='hidden md:block lg:w-7/12 text-right'>
                    <Img className='w-9/12 ml-auto' src={src} />
                </Div>
            </Container>
        </Div>
    )
}

export default Slide