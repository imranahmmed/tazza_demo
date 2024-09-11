import React, { useState, useEffect, useRef } from 'react'
import HeroSection from '../common/HeroSection';
import Container from '../layouts/Container';
import Div from '../layouts/Div';
import PaginateGrid from '../layouts/PaginateGrid';
import { BiGridAlt } from 'react-icons/bi';
import { BsFilterSquare } from 'react-icons/bs';
import { TiThList } from 'react-icons/ti';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Select from '../layouts/Select';
import SidebarFilter from '../common/filter/SidebarFilter';
import PaginateList from '../layouts/PaginateList';

const Shop = () => {
    const [showNumber, setShowNumber] = useState(20);
    const [showListGrid, setShowListGrid] = useState(false);

    const [filterSidebarShow, setFilterSidebarShow] = useState(false);
    const filterRef = useRef();

    const handleShowNumber = (e) => {
        setShowNumber(+e.target.value)
    }

    useEffect(() => {
        function resizeWith() {
            if (window.innerWidth < 1024) {
                setFilterSidebarShow(false);
            } else {
                setFilterSidebarShow(true);
            }
        }
        resizeWith();

        window.addEventListener("resize", resizeWith)
    }, [])

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            console.log(filterRef.current.contains(e.target))
            if (filterRef.current.contains(e.target)) {
                setFilterSidebarShow(true);
            }
            else {
                setFilterSidebarShow(false);
            }
        });
    }, [])

    return (
        <>
            <HeroSection pageTitle='Products' />

            <Container className='mx-auto flex mt-10 relative'>
                <Div className={`bg-white absolute top-0 w-[320px] z-10 px-3 shadow-sm sm:w-[320px] lg:h-auto lg:static lg:bg-transparent lg:block lg:w-[25%] xl:w-[20%] ${filterSidebarShow ? `left-[0px]` : `left-[-320px] pt-3`}`}>
                    {filterSidebarShow &&
                        <Div className='text-2xl text-gray flex justify-end my-3 cursor-pointer lg:hidden'>
                            <IoCloseCircleOutline onClick={() => setFilterSidebarShow(!filterSidebarShow)} />
                        </Div>
                    }

                    {!filterSidebarShow &&
                        <Div className='text-2xl absolute top-[50px] right-[-40px] bg-white text-gray p-3 rounded shadow-sm cursor-pointer'>
                            <BsFilterSquare onClick={() => setFilterSidebarShow(!filterSidebarShow)} />
                        </Div>
                    }

                    <div ref={filterRef}>
                        <SidebarFilter />
                    </div>
                </Div>

                <Div className='w-full sm:w-[100%] lg:w-[75%] xl:w-[80%]'>
                    <Div className='flex items-center justify-between mx-3 mb-5 bg-white p-3 rounded-md border border-border shadow-md flex-wrap sm:flex-nowrap '>
                        <Div className='selectBox filterShort flex items-center gap-2 flex-wrap mb-3 w-3/6 px-2 md:w-[250px] md:flex-nowrap md:mb-0'>
                            <Select selectName='selectSort' selectTitle='Short By :' selectOptions={['featured', 'recommend', 'trending', 'Price Low to High', 'Price Hign to low']} />
                        </Div>

                        <Div className='selectBox filterShow flex items-center gap-2 flex-wrap mb-3 w-3/6 px-2 md:w-[150px] md:flex-nowrap md:mb-0'>
                            <Select onChange={handleShowNumber} selectName='selectShow' selectTitle='Show :' selectOptions={[20, 40, 80, 100, 10]} />
                        </Div>

                        <Div className='flex gap-3 justify-around items-center text-2xl text-text cursor-pointer w-[125px] sm:mt-3 md:mt-0 md:w-[125px]'>
                            <BiGridAlt onClick={() => setShowListGrid(!showListGrid)} />
                            <TiThList onClick={() => setShowListGrid(!showListGrid)} />
                        </Div>
                    </Div>
                    {showListGrid
                        ?
                        <PaginateList itemsPerPage={showNumber} />
                        :
                        <PaginateGrid itemsPerPage={showNumber} />
                    }
                </Div>
            </Container>
        </>
    )
}

export default Shop