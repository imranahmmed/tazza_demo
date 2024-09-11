import React from 'react'
import Div from '../layouts/Div'
import Img from '../layouts/Img'
import Container from '../layouts/Container'
const Copyright = () => {
    return (
        <Div className='copyright'>
            <Container className='container mx-auto px-4'>
                <Div className='flex flex-wrap items-center text-white rounded-t-xl justify-between bg-primary py-5 px-9'>
                    <Div className='w-full text-center lg:w-1/2 lg:text-left'>
                        <p>© All Copyrights Reserved by TazZa</p>
                    </Div>

                    <Div className='w-full text-center lg:w-1/2 lg:text-right'>
                        <Div className='flex items-center justify-center lg:justify-end mt-3 lg:mt-0 gap-2'>
                            <Img src='assets/images/payment/jpg/01.jpg' />
                            <Img src='assets/images/payment/jpg/02.jpg' />
                            <Img src='assets/images/payment/jpg/03.jpg' />
                            <Img src='assets/images/payment/jpg/04.jpg' />
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Div>
    )
}

export default Copyright