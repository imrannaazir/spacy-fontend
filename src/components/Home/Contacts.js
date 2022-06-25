import React from 'react';
const Contacts = () => {
    return (
        <div className='flex flex-col items-center mb-10'>
            <div>
                <div className='flex items-end justify-center'>
                    <div className='w-[50px] h-[1px] bg-primary'></div>
                    <p className='text-center mt-10 text-xl font-[Courgette] text-primary '>Our News

                    </p><div className='w-[50px] h-[1px] bg-primary'></div>
                </div>
                <p
                    id='rockets'
                    className='text-center mb-6 text-4xl font-semibold text-black uppercase'> SIGN UP FOR LATEST NEWS</p>
            </div>
            <div>
                <div className='max-w-[800px] min-w-[320px] relative'>
                    <input type="text" placeholder="Enter your email here..." class="input input-bordered w-full rounded-full input-info  " />
                    <button className='btn btn-primary rounded-full text-base-100 absolute right-0'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;