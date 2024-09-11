import React, { useState } from 'react'
import Button from '../layouts/Button'
import Div from '../layouts/Div'
import ListItem from '../layouts/ListItem'
import List from '../layouts/List'
import P from '../layouts/P'

import { AiFillUnlock } from 'react-icons/ai'
import { IoMdLogOut } from 'react-icons/io'
import { FaGlobeAmericas } from 'react-icons/fa'
import { RiMoneyDollarCircleFill, RiContactsBookFill } from 'react-icons/ri'
import { ImHome } from 'react-icons/im'
import { BsShop, BsBriefcaseFill } from 'react-icons/bs'
import { MdCategory, MdContactSupport, MdPhoneAndroid, MdAlternateEmail } from 'react-icons/md'
import { TbDiscount2 } from 'react-icons/tb'
import { GiTireIronCross } from 'react-icons/gi'
import { Link } from 'react-router-dom'


const NavSidebar = ({ navRef, onClick }) => {
    let [isSignIn, setSignIn] = useState(false)

    // document.body.addEventListener("mouseover", (e) => {
    //     document.body.style.overflow = "hidden";
    // })

    return (
        <aside className='nav-sidebar w-80 h-screen fixed top-0 left-0 bg-white drop-shadow-lg sideNavShadow overflow-y-auto duration-300 z-50' ref={navRef}>
            <Div>
                <Div className='border-b p-5 border-border relative'>
                    <img src="assets/images/logo.png" alt="" className='h-11 m-auto' />
                    <GiTireIronCross className='absolute top-4 right-4 text-lg cursor-pointer' onClick={onClick} />
                </Div>

                <Div className='bg-chalk py-9 text-center'>
                    {isSignIn ?
                        <Button className='bg-primary text-white py-3 px-7 flex items-center m-auto rounded-md'> <IoMdLogOut className='mr-2' /> Sign Out</Button>
                        :
                        <Button className='bg-primary text-white py-3 px-7 flex items-center m-auto rounded-md'> <AiFillUnlock className='mr-2' /> Join Here</Button>
                    }
                </Div>

                <Div className="flex justify-end w-full py-5 border-b border-border">
                    <Div className="flex items-center justify-end w-6/12 text-right px-5 border-r border-border">
                        <FaGlobeAmericas className='text-white mr-3' />
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">Bangla</option>
                            <option value="">Arabic</option>
                        </select>
                    </Div>

                    <Div className="flex items-center justify-start w-6/12 text-left px-5">
                        <RiMoneyDollarCircleFill className='text-white mr-3' />
                        <select name="" id="">
                            <option value="">Taka</option>
                            <option value="">Pound</option>
                            <option value="">Doller</option>
                        </select>
                    </Div>
                </Div>


                <Div className='px-5 pb-5'>
                    <List>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <ImHome className='mr-2' /> Home </ListItem>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <BsShop className='mr-2' /> Shop </ListItem>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <MdCategory className='mr-2' /> Category </ListItem>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <TbDiscount2 className='mr-2' /> Offers </ListItem>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <BsBriefcaseFill className='mr-2' /> My Account </ListItem>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <MdContactSupport className='mr-2' /> Need Help </ListItem>
                        <ListItem href='#' className='p-3 text-base font-medium text-text rounded-lg border-b border-border duration-300 hover:bg-green-chalk hover:text-primary hover:border-green-chalk'> <RiContactsBookFill className='mr-2' /> Contact Us </ListItem>
                    </List>
                </Div>


                <Div className="px-5 pb-5">
                    <Div className="flex justify-start items-center mb-5">
                        <MdPhoneAndroid className='text-4xl text-primary mr-4' />
                        <P>
                            <small className='block text-sm capitalize'>call us</small>
                            <span className='text-base font-medium'>(+880) 183 8288 389</span>
                        </P>
                    </Div>

                    <Div className="flex justify-start items-center">
                        <MdAlternateEmail className='text-4xl text-primary mr-4' />
                        <P>
                            <small className='block text-sm capitalize'>Email us</small>
                            <span className='text-base font-medium'>support@example.com</span>
                        </P>
                    </Div>
                </Div>

                <Div className='px-5 text-sm text-center border-t border-border py-5 bg-chalk'>
                    <P>All Rights Reserved by <Link to="#" className='text-primary'>Imran Ahammed</Link> </P>
                </Div>
            </Div>
        </aside>
    )
}

export default NavSidebar