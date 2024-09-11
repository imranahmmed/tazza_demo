import React from 'react'
import Container from '../../../layouts/Container'
import Div from '../../../layouts/Div'
import Search from '../../../layouts/Search'
import Button from '../../../layouts/Button'

const NewsLetter = () => {
	return (
		<Div className='news_letter bg-newsletter-bg bg-center bg-no-repeat py-16 relative z-[1] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-deep-transparent before:z-[-1]'>
			<Container className='container flex flex-wrap items-center mx-auto px-4'>
				<Div className='w-full mb-3 sm:w-full md:w-6/12 xl:w-7/12'>
					<h2 className='text-white text-xl mb-2 sm:text-4xl md:text-4xl font-medium'>Get 20% Discount For Subscriber</h2>
					<p className='text-white text-lg font-thin sm:text-xl md:text-xl'>Lorem ipsum dolor consectetur adipisicing accusantium</p>
				</Div>
				
				<Div className='w-full mt-3 sm:w-full md:w-6/12 xl:w-5/12'>
					<Div className="flex items-center bg-chalk rounded-md overflow-hidden duration-300 border-2 border-solid border-chalk w-full group-hover:border-primary group-active:border-primary group-focus:border-primary p-1">
						<Search className='w-full p-3 lg:block bg-chalk outline-0 capitalize' placeholder='Enter Your Email Address' />
						<Button className='bg-primary text-white py-3 px-6'>@Subscribe</Button>
					</Div>
				</Div>
			</Container>
		</Div>
	)
}

export default NewsLetter