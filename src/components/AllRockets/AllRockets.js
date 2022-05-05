import { async } from '@firebase/util';
import { faDeleteLeft, faEdit, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const AllRockets = ({ rocket }) => {
    const handleDelete = id => {
        (async function () {
            const { data } = await axios.delete(`http://localhost:5000/rockets/${id}`)
            console.log(data);
        })()
    }

    return (
        <Zoom right cascade>
            <tr class="bg-black ">
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap bg-slate-900 border-b-[1px] border-gray-500">
                    {rocket?.name}
                </th>
                <td class="px-6 py-4 bg-zinc-900 border-b-[1px] border-gray-500">
                    <img className=' w-20 rounded-full' src={rocket?.img} alt="" />
                </td>
                <td class="px-6 py-4 bg-[#021305] border-b-[1px] border-gray-500">
                    {rocket.supplier}
                </td>
                <td class="px-6 py-4 bg-[#050213] border-b-[1px] border-gray-500">
                    {rocket?.quantity}
                </td>
                <td class="px-6 py-4 border-b-[1px] border-gray-500">
                    <Link to={`/update/${rocket._id}`}>  <FontAwesomeIcon icon={faEdit} /></Link>
                </td>
                <td class="px-6 py-4 bg-gray-900 border-b-[1px] border-gray-500">
                    <FontAwesomeIcon onClick={() => handleDelete(rocket._id)} icon={faTrashAlt} />
                </td>
            </tr>
        </Zoom>
    );
};

export default AllRockets;