import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Modal from "./ModalOpen";
import ModalOpen from "./ModalOpen";

const Mycourse = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    const [asc, setdes] = useState(true);
    const navigate = useNavigate();
    const modalref = useRef(null);
    const token = localStorage.getItem('access-token');

    const { isLoading, refetch, data: mycourse = [] } = useQuery({
        queryKey: ['mycourse', user?.email, asc],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mycourse?email=${user?.email}&sort=${asc ? 'asc' : 'des'}`, {
                headers:
                {
                    authorization: `bearer ${token}`
                }
            });

            return res.json();

        },
    })


    if (!mycourse.error) {
        mycourse;
    }
    else {
        navigate('/')
    }




    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',

            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handlemodal = () => {
        
         console.log(modalref.current.value)
    }

    if (isLoading) {
        return <ColorRing

            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }

    return (
        <div className="bg-gray-300  p-2">

            <div className="text-center mt-4 mb-8 space-x-4">
                <button onClick={() => setdes(!asc)} className="btn bg-purple-950 text-white border-none">{asc ? 'Ascending' : 'descending'}</button>

            </div>
            {mycourse?.map(item => <div key={item._id} className="card mb-4 card-side md:w-4/6 opacity-90 justify-center items-center bg-base-100 p-2 shadow">
                <figure className="w-60"><img src={item.courseImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{item.courseName}</h2>
                    <p className="font-bold text-orange-600">${item.courseFee}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(item)} className="btn bg-red-600 text-white">delete</button>
                        <button
                            className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                           Feedback
                        </button>
                        {showModal ? (
                            <>
                                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                                <h3 className="text-3xl font=semibold">Feedback About course</h3>
                                               
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                                <textarea ref={modalref} className="textarea textarea-bordered" placeholder="comments"></textarea>
                                                   
                                                </form>
                                            </div>
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="button"
                                                    onClick={handlemodal}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>)


            }


        </div>
    );
};

export default Mycourse;