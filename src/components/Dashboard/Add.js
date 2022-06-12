import React from 'react';
import { Bounce, Slide, Zoom } from 'react-reveal';
import DashNav from './DashNav';
import logo from '../../assets/images/logo.png'
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Add = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    //handle submit function
    if (loading) {
        <Loading />
    };

    // handle add submit
    const handleSubmit = e => {
        e.preventDefault();
        const newRocket = {
            name: e.target.name.value,
            description: e.target.description.value,
            img: e.target.img.value,
            supplier: e.target.supplier.value,
            quantity: e.target.quantity.value,
            email: user.email
        };

        // conformation and post new data
        const proceed = window.confirm(`Are You Sure You want to add ${newRocket.name}?`);
        if (proceed) {
            (async function () {
                const { data } = await axios.post('https://nameless-beach-41067.herokuapp.com/rockets', newRocket)

            })();
            e.target.reset();
            navigate('/my-items');
            toast.success('Successfully uploaded!')
        };
    };

    return (
        <div>
            <DashNav />

            {/* Header title */}
            <Zoom right>
                <div className='pl-[15%] py-4 flex items-end gap-6 bg-gradient-to-bl from-gray-500 rounded-l-3xl mb-10'>
                    <p className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr  from-white to-gray-500 '>ADD NEW ITEMS -</p>

                </div>
            </Zoom>


            {/* Add new data section */}
            <Bounce cascade>
                <div className="px-8 py-20 w-[20%] mx-auto">
                    <div className="grid gap-8 items-start justify-center w-[75%] mx-auto">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            {/* form started */}
                            <form
                                onSubmit={handleSubmit}
                                className=' flex justify-center items-center flex-col w-[380px] rounded-lg   relative  my-auto bg-black text-white'>
                                {/* logo */}
                                <img className=' h-16' src={logo} alt="" />

                                {/* name input */}
                                <input
                                    className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg'
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    required
                                    autoComplete='off'
                                />

                                <br />

                                {/* description input */}
                                <textarea
                                    className=' bg-transparent border-2 border-white w-[330px]  pt-4 pl-4 mb-4 rounded-lg'
                                    type="text"
                                    name="description"
                                    placeholder='Description'
                                    required
                                    autoComplete='off'
                                />

                                <br />

                                {/* image input */}
                                <input
                                    className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg'
                                    type="text"
                                    name="img"
                                    placeholder='Photo URL'
                                    required
                                    autoComplete='off'
                                />

                                <br />

                                {/* supplier name input */}
                                <input
                                    className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg'
                                    type="text"
                                    name="supplier"
                                    placeholder='Supplier Name'
                                    required
                                    autoComplete='off'
                                />

                                <br />

                                {/* quantity input */}
                                <input
                                    className=' bg-transparent border-2 border-white w-[330px]  h-10 pl-4 mb-4 rounded-lg'
                                    type="number"
                                    min='0'
                                    name="quantity"
                                    placeholder='Quantity'
                                    required
                                    autoComplete='off' />


                                {/* submit button */}
                                <button
                                    className=' text-lg font-semibold text-gray-700 hover:text-white font-serif px-4 py-2 rounded-lg mb-4 bg-white w-[330px] transform duration-500 hover:scale-110 hover:bg-gray-400'>Add</button>

                            </form>
                        </div>
                    </div>
                </div>
            </Bounce>

        </div>
    );
};

export default Add;