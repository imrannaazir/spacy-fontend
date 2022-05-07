import { faCalendarAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-reveal';

const Blog = ({ blog: { id, title, author, img, blog } }) => {
    return (
        <Zoom cascade>
            <div className="w-[95%] hover:scale-105 duration-500 my-8 mx-auto relative">
                <div className="grid gap-8 items-start justify-center w-[75%] mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>


                        <div className='bg-black text-white w-[100%]  mx-auto flex gap-4  relative rounded-lg p-4'>
                            <div className={`w-[30%] ${id % 2 === 0 ? 'order-2' : '-order-2'} flex flex-col justify-between`}>
                                <img className='rounded-lg' src={img} alt="" />
                                <div className='flex px-2 justify-between text-gray-500'>
                                    <span><FontAwesomeIcon icon={faPen} /> {author}</span>
                                    <span className=''><FontAwesomeIcon icon={faCalendarAlt} /> 12 April 2022</span>
                                </div>
                            </div>


                            <div className='w-[70%]'>
                                <p className='text-2xl text-pink-500'>{title}</p>
                                <p className='text-gray-300'>{blog}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default Blog;