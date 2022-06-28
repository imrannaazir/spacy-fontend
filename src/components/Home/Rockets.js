import React from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Rockets = ({ product: { name, img, description, quantity, supplier, _id } }) => {
    //aos
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])

    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`/update/${id}`)
    };

    return (
        <div data-aos="fade-up" class="card max-w-sm mx-auto bg-base-100 shadow-xl group transform duration-300 hover:scale-95 hover:shadow-none">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <div className='flex justify-between'>
                    <h2 class="card-title">
                        {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <div class="badge badge-outline">{supplier}</div>
                </div>
                <p>{description.slice(0, 50)}...</p>
                <div class="card-actions justify-end">

                    <button onClick={() => navigateToUpdate(_id)} className='btn text-white btn-sm btn-primary rounded-full font-normal'>Update</button>
                    <button onClick={() => navigateToUpdate(_id)} className='btn btn-outline btn-sm btn-primary rounded-full font-normal'>Details</button>

                </div>
            </div>
        </div>
    );
};

export default Rockets;