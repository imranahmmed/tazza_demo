import React from 'react'
import Div from '../layouts/Div'

const SectionHeader = ({headerTitle}) => {
    return (
        <Div className='sectionHeading text-center capitalize text-4xl font-medium text-heading mb-10'>
            <h2>{headerTitle}</h2>
        </Div>
    )
}

export default SectionHeader