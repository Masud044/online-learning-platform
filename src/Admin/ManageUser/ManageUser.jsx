
import { useQuery } from "@tanstack/react-query";

import { FcBusinesswoman } from "react-icons/fc";
import { ColorRing } from "react-loader-spinner";

import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";


const ManageUser = () => {

     
    const [refetch,isLoading,users] = useAdmin();

    const handleadmin=(item)=>{

           fetch(`http://localhost:5000/user/${item._id}`,{
               method:'PATCH',
           })
           .then(res=>res.json())
           .then(data=>{
              if(data.modifiedCount>0){
               refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.name} Admin` ,
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
           })
    }


    if (isLoading) {
        <ColorRing
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
        <div>
            <div className="overflow-x-auto bg-gray-300 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Index</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                </td>
                                <td>{item.email}</td>
                                <td>
                                    {
                                        item?.role == 'admin'? 'admin':
                                        <button onClick={()=>handleadmin(item)} className="btn"> <FcBusinesswoman ></FcBusinesswoman> </button>
                                    }
                                   
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;