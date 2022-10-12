import React from 'react';

const Pagination = ({ pageCount, setPage, page, setLimit }) => {
    return (
        <tr className='w-full'>
            <th className='pagination my-3 text-right flex items-center justify-start w-full'>

                {
                    [...Array(pageCount).keys()].map(number =>
                        <button
                            onClick={() => setPage(number)}
                            className={`px-2 py-1 m-1 rounded-md bg-base-100 text-black ${page === number && 'bg-primary'}`}
                            key={number}>{number + 1}
                        </button>)
                }
                <select
                    className='bg-primary p-1 rounded-lg mr-2'
                    onChange={e => setLimit(e.target.value)}>
                    <option value="5">5</option>
                    <option defaultValue="10" >10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </th>
        </tr>
    );
};

export default Pagination;