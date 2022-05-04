import React from 'react';
import DashNav from '../DashNav/DashNav';

const MyItems = () => {
    return (
        <div>
            <DashNav />
            <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                <p className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 '>MY ITEMS -</p>

            </div>

        </div>
    );
};

export default MyItems;