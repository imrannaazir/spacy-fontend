import React from 'react';
import { Link } from 'react-router-dom';

const JoinNow = () => {
    return (
        <div
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')` }}
            class="hero bg-cover min-h-[500px] gap-10 bg-fixed"
        >
            <div class="hero-overlay bg-opacity-75"></div>
            <div class="hero-content text-center text-base-100  lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Store Your Product</h1>
                    <p class="py-6">
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