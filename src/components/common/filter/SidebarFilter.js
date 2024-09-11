import React from 'react';
import FilterBox from './FilterBox';
import SidebarAd from './SidebarAd';
import { rating, tags, brands, category } from '../../data/data';
const SidebarFilter = ({filterRef}) => {
    return (
        <div ref={filterRef}>
            <SidebarAd />

            <FilterBox filter={true} priceBox={true} filterTitle='FILTER BY price' />
            <FilterBox filter={true} rating={true} filterTitle='FILTER BY rating' data={rating} />
            <FilterBox filter={true} rating={false} filterTitle='FILTER BY tags' data={tags} />
            <FilterBox filter={true} rating={false} filterTitle='FILTER BY brands' data={brands} />
            <FilterBox filter={true} rating={false} filterTitle='FILTER BY category' data={category} />

        </div>
    )
}

export default SidebarFilter