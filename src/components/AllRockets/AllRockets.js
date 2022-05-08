import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const AllRockets = ({ rocket, rockets, setRockets }) => {

    // handle delete 
    const handleDelete = id => {

        // conformation for delete
        const proceed = window.confirm('Are You sure delete the rocket??')
        if (proceed) {
            (async function () {
                const { data } = await axios.delete(`http://localhost:5000/rockets/${id}`)
                const restRockets = await rockets.filter(rocket => rocket._id !== id)
                setRockets(restRockets);
            })();
        };
    };

    return (
        <Zoom right cascade>
            {/* table body */}
            <tr className="bg-black ">

                {/* name col */}
                <th
                    scope="row"
                    className="px-1 lg:px-6 py-4 font-medium text-white whitespace-nowrap bg-slate-900 border-b-[1px] border-gray-500">
                    {rocket?.name}
                </th>

                {/* img col */}
                <td
                    className="px-1 lg:px-6 py-4 bg-zinc-900 border-b-[1px] border-gray-500 ">
                    <img
                        className='w-10 lg:w-20 rounded-full'
                        src={rocket?.img}
                        alt=""
                    />
                </td>

                {/* supplier col */}
                <td
                    className="px-1 lg:px-6 py-4 bg-[#021305] border-b-[1px] border-gray-500">
                    {rocket.supplier}
                </td>

                {/* quantity col */}
                <td
                    className="px-1 lg:px-6 py-4 bg-[#050213] border-b-[1px] border-gray-500">
                    {rocket?.quantity}
                </td>

                {/* edit col */}
                <td
                    className="px-1 lg:px-6 py-4 border-b-[1px] border-gray-500">
                    <Link
                        to={`/update/${rocket._id}`}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                </td>


                {/* delete col */}
                <td
                    className="px-1 lg:px-6 py-4 bg-gray-900 border-b-[1px] border-gray-500">
                    <FontAwesomeIcon onClick={() => handleDelete(rocket._id)} icon={faTrashAlt} />
                </td>

            </tr>
        </Zoom>
    );
};

export default AllRockets;