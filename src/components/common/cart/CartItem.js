import React from 'react';
import Div from '../../layouts/Div';
import Img from '../../layouts/Img';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiMinus } from 'react-icons/bi';
import Button from '../../layouts/Button';
import Input from '../../layouts/Input';

const CartItem = () => {
    return (
        <Div className='group cart-item flex items-center gap-3 border-b border-border py-3 cursor-pointer'>
            <Div className='cart-media w-3/12 relative rounded-lg overflow-hidden'>
                <Img src='assets/images/product/09.jpg' className='w-full'></Img>

                <Div className='absolute top-0 left-0 h-full w-full scale-0 bg-deep-transparent flex justify-center items-center duration-300 group-hover:scale-100'>
                    <Button className='h-8 w-7 bg-white flex justify-center items-center rounded'>
                        <RiDeleteBin5Line className='text-red' />
                    </Button>
                </Div>
            </Div>

            <Div className='w-9/12'>
                <Div className='product-info mb-1'>
                    <h6 className='font-normal'>Existing Product Name</h6>
                    <span className='text-sm'>Unit Price - $8.75</span>
                </Div>

                <Div className='cart-action-group'>
                    <Div className='cart-action flex items-center justify-between'>
                        <Div className='flex items-center'>
                            <Button className='bg-chalk text-base rounded h-8 w-8 flex items-center justify-center'> + </Button>
                            <Input type="text" className='w-12 h-8 py-1 bg-chalk mx-1 rounded text-center text-sm' placeholder='Qty' />
                            <Button className='bg-chalk text-base rounded h-8 w-8 flex items-center justify-center'><BiMinus /> </Button>
                        </Div>

                        <h6 className='ml-3 text-primary font-medium'>$56.98</h6>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default CartItem