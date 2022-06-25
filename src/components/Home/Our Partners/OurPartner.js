import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurPartner = () => {
    return (
        <div class="card w-96">
            <div class="card-body items-center text-center">
                <div class="avatar">
                    <div class="w-20 rounded-full">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" />
                    </div>
                </div>
                <p>CEO of SpaceX</p>
                <p className='font-thin text-gray-700 font-[Quicksand]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fuga officiis vitae, similique consectetur quisquam, repellendus corrupti eos maiores quos architecto. Quaerat consequatur sapiente repellat qui ipsa commodi quae ipsum tempora nihil obcaecati quis corrupti cupiditate mollitia illum, ad, nisi ducimus quisquam saepe assumenda dolores tenetur recusandae vitae delectus beatae?</p>
                <div class="card-actions flex flex-col items-center">
                    <FontAwesomeIcon className='text-primary text-4xl' icon={faQuoteRight} />
                    <p className='font-[Courgette] text-primary'>Elon Musk</p>
                </div>
            </div>
        </div>
    );
};

export default OurPartner;