import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate()
    const blogSites = [
        {
            id: 1,
            site: 'Medium',
            url: 'https://medium.com/search?q=javascript',
            img: 'https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png'
        },
        {
            id: 2,
            site: 'Programming-Hero',
            url: 'https://web.programming-hero.com/blog',
            img: 'https://i02.appmifile.com/392_bbs_en/23/09/2020/c0d3b6b25e.jpg'
        },
        {
            id: 3,
            site: 'Geeks For Geeks',
            url: 'https://www.geeksforgeeks.org/javascript/',
            img: 'https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda'
        },
    ]
    return (
        <div className='bg-white'>
            <div className='my-16 '
                style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnwtrg2yo4ACU1mtBjyuvUggeA0W1gi9H_w&usqp=CAU')` }}
                class="hero bg-cover min-h-[300px] gap-10 "
            >
                <div class="hero-overlay bg-opacity-75"></div>
                <div class="hero-content text-center text-base-100  lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Blog</h1>
                    </div>

                </div>
            </div>
            <div className='p-10 '>
                <h3 className='font-[Courgette] text-[1.5vw] text-primary text-center'>Find Our</h3>
                <h1 className='text-[3vw] font-bold text-center'>BLOG</h1>
                <div className='flex flex-wrap justify-center gap-10'>
                    {
                        blogSites.map(blog => <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={blog.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <p>Find our Blogs on</p>
                                <h2 className="card-title">{blog.site}</h2>
                                <div className="card-actions justify-end">
                                    <a href={blog.url} target='_blank' rel="noreferrer" className="btn btn-primary text-white">Read Blog</a>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;