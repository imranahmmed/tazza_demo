import React from 'react'

const Discountprice = ({currancy,discountPrice}) => {
  return (
    <del className='text-red'>{currancy}{discountPrice}</del>
  )
}

export default Discountprice