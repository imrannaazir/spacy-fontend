import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const JoinNow = () => {
    //aos
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div id='join' data-aos="fade-up"
            style={{ backgroundImage: `url('https://i.ibb.co/WWhjsys/store-your-product.webp')` }}
            className="hero bg-cover min-h-[500px] gap-10 bg-fixed"
        >
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="hero-content text-center text-base-100  lg:flex-row-reverse">
                <div data-aos="fade-right" className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Store Your Product</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    <Link to="/admin/add">
                        <button className='btn btn-outline btn-primary rounded-full'>Be a vendor</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default JoinNow;