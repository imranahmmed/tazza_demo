import React from 'react'
import Container from '../layouts/Container'
import Div from '../layouts/Div';
import Img from '../layouts/Img';
import { BiSearchAlt } from 'react-icons/bi'
import { FaRandom } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import Search from '../layouts/Search';
import Button from '../layouts/Button';
import { Link } from 'react-router-dom';


const Header = ({ navRef, sideBarOnClick, cartSideBarOnClick }) => {

    return (
        <div ref={navRef}>
            <Container className="container mx-auto px-4">
                <Div className="flex justify-between items-center border-b border-border py-5">
                    <Div className='order-2 text-center lg:order-1 lg:w-2/12'>
                        <a href="" className=''>
                            <Img src="assets/images/logo.png" className="h-11" alt="logo" />
                        </a>
                    </Div>

                    <Div className='order-1 lg:order-2 lg:w-2/12'>
                        <span className='flex justify-center items-center w-full lg:justify-start' onClick={sideBarOnClick}>
                            <Img src="assets/images/user.png" className="rounded-full mr-2.5 h-11 w-11" alt="User Image" />
                            <span className='hidden lg:block text-base font-normal font-rubik'>Imran Ahammed</span>
                        </span>
                    </Div>

                    <Div className="group order-3 lg:order-3 lg:w-5/12">
                        <form className="flex items-center bg-chalk rounded-md overflow-hidden duration-300 border-2 border-solid border-primary group-hover:border-primary group-active:border-primary group-focus:border-primary">
                            <Search className='w-full p-3 hidden lg:block bg-chalk outline-0 text-[15px] capitalize' placeholder='Search anything...' />
                            <Button className='w-12 h-12 flex items-center justify-center'><BiSearchAlt className='i' /></Button>
                        </form>
                    </Div>

                    <Div className="hidden lg:order-4 lg:w-3/12 lg:flex align-center justify-end ">
                        <Link to="#" className='flex justify-center items-center relative h-11 w-11 bg-chalk text-text rounded-full duration-300 hover:bg-primary hover:text-white'>
                            <FaRandom />
                            <sub className='absolute top-[-3px] right-[-3px] bg-primary h-6 w-6 flex justify-center items-center text-white rounded-full border-2 ' >0</sub>
                        </Link>

                        <Link to="#" className='flex justify-center items-center relative h-11 w-11 bg-chalk text-text rounded-full duration-300 hover:bg-primary hover:text-white ml-6'>
                            <AiFillHeart />
                            <sub className='absolute top-[-3px] right-[-3px] bg-primary h-6 w-6 flex justify-center items-center text-white rounded-full border-2 ' >0</sub>
                        </Link>

                        <Link to="#" onClick={cartSideBarOnClick} className='flex justify-center items-center relative h-11 w-11 bg-chalk text-text rounded-full duration-300 hover:bg-primary hover:text-white ml-6'>
                            <BsCart4 />
                            <sub className='absolute top-[-3px] right-[-3px] bg-primary h-6 w-6 flex justify-center items-center text-white rounded-full border-2 ' >9+</sub>
                        </Link>

                        <Div className="ml-2">
                            <span className='text-xs uppercase whitespace-nowrap font-normal text-heading text-left duration-300 hover:text-primary'>
                                Total price
                                <small className='block font-semibold text-base'>$345.00</small>
                            </span>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </div>
    )
}

export default Header