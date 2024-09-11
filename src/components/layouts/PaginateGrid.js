import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../common/ProductCard';
import Div from './Div';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    <ProductCard key={index} className='w-full sm:w-3/6  md:w-1/3 xl:w-1/4 2xl:w-1/5 px-3 mb-6' src='assets/images/product/08.jpg' productName='Fresh Green Chilis' currancy='$' price='54' discount={true} discountPrice='24' unit='kg' badge={false} badgeTitle='New' />
                ))}
        </>
    );
}

const PaginateGrid = ({ itemsPerPage }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const loadingItems = `Showing items from ${itemOffset + 1} to ${endOffset} of ${items.length}`;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };
    
    return (
        <>
            <Div className='flex flex-wrap mx-auto'>
                <Items currentItems={currentItems} />
            </Div>
            <Div className='flex justify-between items-center px-4'>
                <Div>{loadingItems}</Div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="overflow-hidden border-2 border-solid border-border h-10 w-10 flex items-center justify-center overflow-hidden"
                    previousClassName="page-item "
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    containerClassName="flex items-center gap-x-3.5"
                    activeClassName="active bg-primary text-white"
                />
            </Div>
        </>
    );
}

export default PaginateGrid