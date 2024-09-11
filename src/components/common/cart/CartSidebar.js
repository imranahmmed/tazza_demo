import React from 'react'
import Div from '../../layouts/Div'
import { FaShoppingBasket } from 'react-icons/fa'
import CartItem from './CartItem'
import { GiTireIronCross } from 'react-icons/gi'
import Button from '../../layouts/Button'
const CartSidebar = ({ cartRef, onClick }) => {
    return (
        <aside className='nav-sidebar w-96 h-screen fixed top-0 right-0 bg-white drop-shadow-lg sideNavShadow overflow-y-auto duration-300 z-50' ref={cartRef}>
            <Div className='relative pt-[60px] pb-[150px]'>
                <Div className='px-5 w-full text-center text-primary font-medium border-b border-border py-5 bg-chalk flex items-center justify-center absolute top-0 left-0'>
                    <GiTireIronCross className='absolute top-5 left-5 text-lg cursor-pointer text-black' onClick={onClick} />
                    <FaShoppingBasket className='mr-3 text-lg' />
                    <h3>Total Item (5)</h3>
                </Div>

                <Div className='cart-product-list px-5 overflow-auto'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Div>

                <Div className='absolute bottom-5 left-0 w-full text-primary text-center px-5'>
                    <Button className='text-primary mb-5'>Do you have a coupon code?</Button>
                    <Button className='bg-primary text-white w-full py-5 rounded-lg'>Proceed to Checkout | $369.78</Button>
                </Div>
            </Div>
        </aside>
    )
}

export default CartSidebar