import React, { useState } from 'react';
import Div from '../../layouts/Div';
import { BsTrash } from 'react-icons/bs';
import Rating from '../Rating';
import Input from '../../layouts/Input';
import Button from '../../layouts/Button';

const FilterBox = ({ filter, filterTitle, children, data, rating, priceBox }) => {
    let [showFilter, setShowFilter] = useState(filter);
    return (
        <>
            {showFilter &&
                <Div className='bg-white my-6 p-5 rounded-xl shadow-sm'>
                    <h3 className='text-lg text-text font-medium cursor-pointer flex items-center justify-between uppercase'>{filterTitle}</h3>

                    {priceBox
                        ?
                        <Div className='flex gap-2'>
                            <Input type='text' className='border w-full rounded border-solid border-border h-11 bg-chalk text-center' placeholder='Min-00' />
                            <Input type='text' className='border w-full rounded border-solid border-border h-11 bg-chalk text-center' placeholder='Max-00' />
                        </Div>
                        :

                        <Div className='border-t border-border mt-3 pt-3'>
                            {data.map((item, index) => (
                                <label htmlFor={item.name + index + item.qty} key={index}>
                                    <Div className='flex gap-3 mb-2 cursor-pointer'>
                                        <Input type='checkbox' className='' id={item.name + index + item.qty} />
                                        {rating
                                            ?
                                            <Rating ratingStar={item.name} ratingNumber={item.qty} className='flex items-center gap-2 justify-between w-full text-md' />
                                            :
                                            <Div className='flex items-center justify-between w-full text-md font-normal text-gray'>
                                                <h3>{item.name}</h3>
                                                <span>({item.qty})</span>
                                            </Div>
                                        }
                                    </Div>
                                </label>
                            ))}
                        </Div>
                    }

                    <Button className='bg-product-add flex items-center justify-center gap-2 py-2 px-8 mt-3 w-full bg-border rounded text-base font-normal duration-300 hover:bg-primary hover:text-white'><BsTrash /> Clear Filter</Button>
                </Div>
            }
        </>
    )
}

export default FilterBox