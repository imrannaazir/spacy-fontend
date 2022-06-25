import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Bounce, Zoom } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Rockets = ({ rocket: { name, img, description, quantity, supplier, _id } }) => {
    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`/update/${id}`)
    };

    return (
        <div class="card max-w-sm bg-base-100 shadow-xl group transform duration-300 hover:scale-95 hover:shadow-none">
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