import React from 'react';
import Banner from './sections/Banner';
import Boxcategory from './sections/Boxcategory';
import Img from '../../layouts/Img';
import ProductSection from './sections/ProductSection';
import Advertisement from './sections/Advertisement';
import Div from '../../layouts/Div';
import NewProduct from './sections/NewProduct';
import FeaturedProduct from './sections/FeaturedProduct';
import ShopbyBrand from './sections/ShopbyBrand';
import NewsLetter from './sections/NewsLetter';
import ShortIntro from './sections/ShortIntro';


const Home = () => {
	return (
		<>
			<Banner />
			<Boxcategory />
			<ProductSection sectionTitle='Recently Sold Items' />
			<Advertisement className='my-28'>
				<Img src='assets/images/promo/home/03.jpg' className='w-full'></Img>
			</Advertisement>
			<NewProduct sectionTitle='Collected New Items' />
			<Advertisement className='my-28'>
				<Div className='w-full lg:w-6/12'>
					<Img src='assets/images/promo/home/01.jpg' className='w-full'></Img>
				</Div>

				<Div className='w-full lg:w-6/12'>
					<Img src='assets/images/promo/home/02.jpg' className='w-full'></Img>
				</Div>
			</Advertisement>
			<FeaturedProduct sectionTitle='Our Featured Items' />

			<ShopbyBrand sectionTitle='Shop By Brands' />
			<NewsLetter />
			<ShortIntro />
		</>
	)
}

export default Home