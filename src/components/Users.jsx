import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [Users, setUsers] = useState(loadedUsers);

    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete form the database
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                            const remaining = Users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className='h-screen w-full px-[8%] '>
            <h2 className='text-start text-xl text-bold py-3 pb-0'>Total User: {Users.length}</h2>
            <div className="overflow-x-auto py-3">
                <table className="table mx-auto w-full text-center">
                    {/* head */}
                    <thead className='bg-[#372727] text-white'>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>cration Time</th>
                            <th>Last Login Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            Users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.cratedAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className='flex gap-2 justify-center'>
                                    <button className="btn btn-xl text-[#372727] border-0"><FaRegEdit /></button>
                                    <button onClick={()=>handleUserDelete(user._id)}  className="btn btn-xl text-[#372727] border-0"><MdDeleteOutline /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users