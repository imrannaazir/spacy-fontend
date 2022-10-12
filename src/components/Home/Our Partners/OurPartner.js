import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurPartner = ({ partner }) => {
    return (
        <div className="card w-96">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={partner?.img} alt="" />
                    </div>
                </div>
                <p>CEO of {partner?.company}</p>
                <p className='font-thin text-gray-700 font-[Quicksand]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fuga officiis vitae, similique consectetur quisquam, repellendus corrupti eos maiores quos architecto. Quaerat consequatur sapiente repellat qui ipsa commodi quae ipsum tempora nihil obcaecati quis corrupti cupiditate mollitia illum, ad, nisi ducimus quisquam saepe assumenda dolores tenetur recusandae vitae delectus beatae?</p>
                <div className="card-actions flex flex-col items-center">
                    <FontAwesomeIcon className='text-primary text-4xl' icon={faQuoteRight} />
                    <p className='font-[Courgette] text-primary'>{partner?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default OurPartner;