import { useState } from "react";
import UseCourse from "../../Hooks/UseCourse";



const ManageCourse = () => {
    const [course] = UseCourse();
    const [showAllCourses, setShowAllCourses] = useState(false);

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
                                        <td>Update</td>
                                        <td>Delete</td>
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
                                        <td>Update</td>
                                        <td>Delete</td>
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
