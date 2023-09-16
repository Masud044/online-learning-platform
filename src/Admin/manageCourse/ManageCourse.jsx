import { useState } from "react";
import UseCourse from "../../Hooks/UseCourse";
import Swal from "sweetalert2";
import CourseUpdate from "../courseUpdate/CourseUpdate";
import { Link } from "react-router-dom";



const ManageCourse = () => {
    const [course,refetch] = UseCourse();
    const [showAllCourses, setShowAllCourses] = useState(false);


    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                 fetch(`http://localhost:5000/deletecourse/${id}`,{
                     method:'DELETE'
                 })
                 .then(res=>res.json())
                 .then(data=>{
                     if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your course has been deleted.',
                            'success'
                          )
                     }
                 })
              
            }
          })
    }

    return (
        <div>
            <div className="overscroll-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showAllCourses
                                ? course?.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.courseName}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.courseImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>
                                        <td>

                                         
                                            <Link to={`/courseupdate/${item._id}`}> <button className="btn bg-purple-700 text-white border-none">update</button></Link>  
                                          
                                           
                                        </td>
                                        <td>
                                        <button onClick={()=>handleDelete(item._id)} className="btn bg-red-700 text-white border-none">Delete</button>
                                        </td>
                                    </tr>
                                ))
                                : course?.slice(0, 10).map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.courseName}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.courseImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        <Link to={`/courseupdate/${item._id}`}> <button className="btn bg-purple-700 text-white border-none">update</button></Link>  
                                          
                                           
                                        </td>
                                        <td>
                                            
                                        <button onClick={()=>handleDelete(item._id)} className="btn bg-red-500 text-white border-none">Delete</button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
                {
                    !showAllCourses && (
                        <div className="text-center">
                            <button onClick={() => setShowAllCourses(true)} className="bg-purple-600 text-white  rounded-md p-2">ShowAll</button>
                        </div>
                    )
                }


            </div>

        </div>
    );
};

export default ManageCourse;
