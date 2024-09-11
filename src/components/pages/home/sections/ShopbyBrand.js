import React from 'react'
import SectionHeader from '../../../common/SectionHeader'
import Container from '../../../layouts/Container'
import Div from '../../../layouts/Div'
import Button from '../../../layouts/Button'
import BrandCard from '../../../common/BrandCard'
import { AiFillEye } from 'react-icons/ai'

const ShopbyBrand = ({sectionTitle}) => {
    return (
        <Div className=''>
            <SectionHeader headerTitle={sectionTitle} />
            <Container className='container mx-auto flex flex-wrap justify-center'>
                <BrandCard src='assets/images/brand/01.jpg' brandName='Econature' itemsCount='45' />
                <BrandCard src='assets/images/brand/02.jpg' brandName='Econature' itemsCount='45' />
                <BrandCard src='assets/images/brand/03.jpg' brandName='Econature' itemsCount='45' />
                <BrandCard src='assets/images/brand/04.jpg' brandName='Econature' itemsCount='45' />
                <BrandCard src='assets/images/brand/05.jpg' brandName='Econature' itemsCount='45' />
                <BrandCard src='assets/images/brand/06.jpg' brandName='Econature' itemsCount='45' />
            </Container>

            <Button className='flex items-center justify-center gap-2 px-5 py-3 mb-28 mt-10 bg-white border-primary border-2 rounded-md text-primary mx-auto text-base font-medium duration-300 hover:bg-primary hover:text-white'> <AiFillEye className='text-base' /> Show All Brands </Button>
        </Div>
    )
}

export default ShopbyBrand