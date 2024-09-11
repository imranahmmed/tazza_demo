import React from 'react'
import Container from '../layouts/Container';
import Div from '../layouts/Div';
import P from '../layouts/P';
import List from '../layouts/List'
import ListItem from '../layouts/ListItem';
import { FaGlobeAmericas } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
const TopHeader = () => {
    return (
        <Div className='bg-primary'>
            <Container className="max-w-container mx-auto px-4">
                <Div className="flex flex-wrap justify-between items-center py-2.5">
                    <Div className='hidden md:block md:w-full md:text-center md:mb-3 lg:mb-0 lg:block lg:w-4/12'>
                        <P className="text-white font-rubik text-sm" paraContent="Welcome to Tazza Online Store!" />
                    </Div>

                    <Div className="flex justify-end w-full md:w-6/12 lg:w-4/12">
                        <Div className="flex items-center justify-end w-6/12 text-right px-5 border-r border-white">
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

                    <Div className='hidden md:block md:w-6/12 lg:w-4/12'>
                        <List className="flex justify-end gap-x-10 font-rubik">
                            <ListItem className="text-white text-sm" itemContent="Offers" />
                            <ListItem className="text-white text-sm" itemContent="Need Help" />
                            <ListItem className="text-white text-sm" itemContent="Contact Us" />
                        </List>
                    </Div>
                </Div>
            </Container>
        </Div>
    )
}

export default TopHeader