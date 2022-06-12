import React from 'react';
const Contacts = () => {
    return (
        <div style={{ backgroundImage: `url(https://www.spacex.com/static/images/backgrounds-2021/hls-resized-2.webp)` }}
            class=" bg-cover h-screen gap-10 bg-fixed flex justify-center items-center">

            <form className='flex flex-col w-[450px] gap-4 text-white' action="">
                <p className='text-xl'>Contact US</p>
                <input className='h-12 rounded-xl pl-4 bg-black border-2 border-blue-500' type="text" placeholder='Your Email' />
                <input className='h-12 rounded-xl pl-4 bg-black border-2 border-blue-500' type="text" placeholder='Subject' />
                <textarea className='h-44 rounded-xl pl-4 pt-4 bg-black border-2 border-blue-500' placeholder='Your message' name="" id="" cols="30" rows="10" />
                <button className='h-12 text-lg font-semibold bg-blue-500 rounded-xl'>Send</button>
            </form>
        </div>
    );
};

export default Contacts;