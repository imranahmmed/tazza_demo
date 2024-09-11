import React from 'react'
import Container from '../../../layouts/Container'
import Div from '../../../layouts/Div'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiReturnArrow } from 'react-icons/gi'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'



const ShortIntro = () => {
    return (
        <Div className='bg-intro-bg py-20'>
            <Container className='container mx-auto flex flex-wrap items-center justify-center'>
                <Div className='w-full sm:w-6/12 md:w-1/2 xl:w-1/4 flex items-start gap-3 px-3 mb-3 md:mb-3 xl:mb-0 sm:mb-6'>
                    <Div className='w-2/12 sm:order-2 md:-order-none'>
                        <Div className='icon h-14 w-14 flex items-center justify-center border-4 border-double border-primary text-primary rounded-full'>
                            <TbTruckDelivery className='text-4xl' />
                        </Div>
                    </Div>
                    <Div className='content w-10/12 sm:order-1 sm:text-right md:-order-none md:text-left'>
                        <h5 className='text-lg font-medium text-text'>Free Home Delivery</h5>
                        <p className='text-text text-sm mt-2'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                    </Div>
                </Div>

                <Div className='w-full sm:w-6/12 md:w-1/2 xl:w-1/4 flex items-start gap-3 px-3 mb-3 md:mb-3 xl:mb-0 sm:mb-6'>
                    <Div className='w-2/12'>
                        <Div className='icon h-14 w-14 flex items-center justify-center border-4 border-double border-primary text-primary rounded-full'>
                            <GiReturnArrow className='text-4xl' />
                        </Div>
                    </Div>
                    <Div className='content w-10/12'>
                        <h5 className='text-lg font-medium text-text'>Instant Return Policy</h5>
                        <p className='text-text text-sm mt-2'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                    </Div>
                </Div>

                <Div className='w-full sm:w-6/12 md:w-1/2 xl:w-1/4 flex items-start gap-3 px-3 mb-3 md:mb-3 xl:mb-0'>
                    <Div className='w-2/12 sm:order-2 md:-order-none'>
                        <Div className='icon h-14 w-14 flex items-center justify-center border-4 border-double border-primary text-primary rounded-full'>
                            <MdOutlineSupportAgent className='text-4xl' />
                        </Div>
                    </Div>
                    <Div className='content w-10/12 sm:order-1 sm:text-right md:-order-none md:text-left'>
                        <h5 className='text-lg font-medium text-text'>Quick Support System</h5>
                        <p className='text-text text-sm mt-2'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                    </Div>
                </Div>

                <Div className='w-full sm:w-6/12 md:w-1/2 xl:w-1/4 flex items-start gap-3 px-3 mb-3 md:mb-3 xl:mb-0'>
                    <Div className='w-2/12'>
                        <Div className='icon h-14 w-14 flex items-center justify-center border-4 border-double border-primary text-primary rounded-full'>
                            <RiSecurePaymentLine className='text-4xl' />
                        </Div>
                    </Div>
                    <Div className='content w-10/12'>
                        <h5 className='text-lg font-medium text-text'>Secure Payment Way</h5>
                        <p className='text-text text-sm mt-2'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                    </Div>
                </Div>
            </Container>
        </Div>
    )
}

export default ShortIntro