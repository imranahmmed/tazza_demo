import React from 'react'
import SectionHeader from '../../../common/SectionHeader'
import Container from '../../../layouts/Container'
import ProductCard from '../../../common/ProductCard'
import Div from '../../../layouts/Div'
import Button from '../../../layouts/Button'
import { AiFillEye } from 'react-icons/ai'

const NewProduct = ({ sectionTitle }) => {
    return (
        <Div className=''>
            <SectionHeader headerTitle={sectionTitle} />
            <Container className='container mx-auto flex flex-wrap px-2'>
                <ProductCard className='w-1/2 sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6' src='assets/images/product/01.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={true} badgeTitle='New'/>
                <ProductCard className='w-1/2 sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6' src='assets/images/product/02.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={false} discountPrice='24' unit='kg' badge={true} badgeTitle='New' />
                <ProductCard className='w-1/2 sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6' src='assets/images/product/03.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={false} badgeTitle='New' outOfStock={true}/>
                <ProductCard className='w-1/2 sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6' src='assets/images/product/04.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={false} discountPrice='24' unit='kg' badge={true} badgeTitle='New' outOfStock={true}/>
                <ProductCard className='w-1/2 sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6' src='assets/images/product/05.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={false} discountPrice='24' unit='kg' badge={true} badgeTitle='New' />
                <ProductCard className='w-1/2 sm:w-3/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-3 mb-6' src='assets/images/product/06.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={false} badgeTitle='New' />
            </Container>
            <Button className='flex items-center justify-center gap-2 px-5 py-3 mb-28 bg-white border-primary border-2 rounded-md text-primary mx-auto text-base font-medium duration-300 hover:bg-primary hover:text-white'> <AiFillEye className='text-base' /> Show More </Button>

        </Div>
    )
}

export default NewProduct