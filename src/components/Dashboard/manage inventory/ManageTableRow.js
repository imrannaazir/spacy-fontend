import React from 'react';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ManageTableRow = ({ rocket, rockets, setRockets, i }) => {
    // handle delete 
    const handleDelete = id => {

        // conformation for delete
        const proceed = window.confirm('Are You sure delete the rocket??')
        if (proceed) {
            (async function () {
                const { data } = await axios.delete(`https://nameless-beach-41067.herokuapp.com/rockets/${id}`)
                const restRockets = await rockets.filter(rocket => rocket._id !== id)
                console.log(data);
                setRockets(restRockets);
            })();
        };
    };
    return (
        <tr>
            <th>{i + 1}</th>
            {/* name col */}
            <th
                scope="row"
                className="">
                {rocket?.name}
            </th>

            {/* img col */}
            <td
                className="">
                <img
                    className='w-12 rounded-xl'
                    src={rocket?.img}
                    alt=""
                />
            </td>

            {/* supplier col */}
            <td
                className="">
                {rocket.supplier}
            </td>

            {/* quantity col */}
            <td
                className="">
                {rocket?.quantity}
            </td>

            {/* edit col */}
            <td
                className="">
                <Link
                    to={`/update/${rocket._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
            </td>


            {/* delete col */}
            <td
                className="">
                <FontAwesomeIcon onClick={() => handleDelete(rocket._id)} icon={faTrashAlt} />
            </td>
        </tr>
    );
};

export default ManageTableRow;