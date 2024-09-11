import React from 'react'
import Div from '../../../layouts/Div'
import Img from '../../../layouts/Img'
import ListItem from '../../../layouts/ListItem'
const Boxsinglecategory = ({src, catName}) => {
    return (
        <ListItem className='w-[240px] overflow-hidden rounded-xl relative'>
            <Img className='w-full' src={src} />
            <Div className='flex items-center justify-center flex-wrap absolute bg-black-transparent w-full h-full text-white text-center'>
                <Div>
                    <h5 className='w-full text-lg capitalize'>{catName}</h5>
                    <span className='w-full'>34 Items</span>
                </Div>
            </Div>
        </ListItem>
    )
}

export default Boxsinglecategory