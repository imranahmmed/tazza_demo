import React from 'react'
import Container from '../layouts/Container'
import Div from '../layouts/Div'
import Img from '../layouts/Img'
import List from '../layouts/List'
import ListItem from '../layouts/ListItem'

import { Link } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsPhoneVibrate } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'


const Footer = () => {
    return (
        <Div className='footer py-24'>
            <Container className='container mx-auto flex flex-wrap'>
                <Div className='footer_widget w-full md:w-1/2 xl:w-1/4 px-4 mb-8'>
                    <Img src='assets/images/logo.png' className='h-14 mb-4' />
                    <p>Adipisci asperiores ipsum ipsa repellat consequatur repudiandae quisquam assumenda dolor perspiciatis sit ipsum dolor amet.</p>

                    <Div className='social_icons mt-4'>
                        <List className='flex items-center gap-3'>
                            <ListItem className='w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full cursor-pointer'>
                                <FaFacebookF />
                            </ListItem>
                            <ListItem className='w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full cursor-pointer'>
                                <FaTwitter />
                            </ListItem>
                            <ListItem className='w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full cursor-pointer'>
                                <FaLinkedinIn />
                            </ListItem>
                            <ListItem className='w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full cursor-pointer'>
                                <FaInstagram />
                            </ListItem>
                            <ListItem className='w-12 h-12 bg-white text-primary flex items-center justify-center rounded-full cursor-pointer'>
                                <FaPinterestP />
                            </ListItem>
                        </List>
                    </Div>
                </Div>

                <Div className='footer_widget w-full md:w-1/2 xl:w-1/4 px-4 mb-8'>
                    <h3 className='text-2xl font-medium mb-6 text-text'>Contact Us</h3>
                    <Div className='w-full flex items-center gap-3'>
                        <Div className=''>
                            <Div className='flex items-center justify-center text-primary'>
                                <MdOutlineAlternateEmail className='text-4xl' />
                            </Div>
                        </Div>
                        <Div className='content'>
                            <p className='text-md text-text'>support@example.com</p>
                            <p className='text-text text-md mt-1'>carrer@example.com</p>
                        </Div>
                    </Div>

                    <Div className='w-full flex items-center gap-3 my-4'>
                        <Div className=''>
                            <Div className='flex items-center justify-center text-primary'>
                                <BsPhoneVibrate className='text-4xl' />
                            </Div>
                        </Div>
                        <Div className='content'>
                            <p className='text-md text-text'>+120 279 532 13</p>
                            <p className='text-text text-md mt-1'>+120 279 532 14</p>
                        </Div>
                    </Div>

                    <Div className='w-full flex items-center gap-3'>
                        <Div className=''>
                            <Div className='flex items-center justify-center text-primary'>
                                <HiOutlineLocationMarker className='text-4xl text-primary' />
                            </Div>
                        </Div>
                        <Div className='content'>
                            <p className='text-md text-text'>support@example.com</p>
                            <p className='text-text text-md mt-1'>carrer@example.com</p>
                        </Div>
                    </Div>
                </Div>


                <Div className='footer_widget w-full md:w-1/2 xl:w-1/4 px-4 mb-8'>
                    <h3 className='text-2xl font-medium mb-6 text-text'>Quick Links</h3>
                    <Div className='links'>
                        <List className='flex flex-wrap'>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>My Account</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Location</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Order History</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Affiliates</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Order Tracking</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Contact</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Best Seller</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Carrer</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>New Arrivals</ListItem>
                            <ListItem className='w-1/2 text-text capitalize mb-4 hover:text-primary hover:underline'>Faq</ListItem>
                        </List>
                    </Div>
                </Div>

                <Div className='footer_widget w-full md:w-1/2 xl:w-1/4 px-4 mb-8'>
                    <h3 className='text-2xl font-medium mb-6 text-text'>Download App</h3>
                    <p>Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi autem obcaecati minus ducimus totam reprehenderit exercitationem!</p>
                    <Div className='flex flex-wrap mt-6'>
                        <Img src='assets/images/google-store.png' className='w-1/2 sm:w-1/2' />
                        <Img src='assets/images/app-store.png' className='w-1/2 sm:w-1/2' />
                    </Div>

                </Div>
            </Container>
        </Div>
    )
}

export default Footer