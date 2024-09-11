import React from 'react'
import Div from '../layouts/Div'
import Img from '../layouts/Img'
import { AiOutlineLink } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BrandCard = ({ src, brandName, itemsCount }) => {
	return (
		<Div className='w-1/2 sm:w-3/6 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mb-6'>
			<Div className='group brand_wrap px-10 text-center cursor-pointer'>
				<Div className='brand_media rounded-full relative overflow-hidden p-5 bg-white before:border-2 before:border-dashed before:border-primary before:h-full before:w-full before:absolute before:top-0 before:left-0 before:rounded-full before:group-hover:animate-spin duration-300'>
					<Img src={src} className='w-full' />

					<Div className='brand_overlay absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-deep-transparent z-10 h-[90%] w-[90%] rounded-full flex items-center justify-center scale-0 group-hover:scale-100 duration-300 ease-in'>
						<Link className='h-12 w-12 bg-primary flex items-center justify-center rounded-full hover:bg-white group-hover:animate-spin'>
							<AiOutlineLink className='text-white text-3xl hover:text-primary' />
						</Link>
					</Div>
				</Div>

				<Div className='brand_meta mt-6'>
					<h6 className='capitalize font-semibold text-text text-lg'>{brandName}</h6>
					<p>({itemsCount} items)</p>
				</Div>
			</Div>
		</Div>
	)
}

export default BrandCard