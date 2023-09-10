import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Mycourse = () => {

     const{user} = useContext(AuthContext);
   

     const { isLoading, data: mycourse = [] } = useQuery({
        queryKey: ['mycourse', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mycourse?email=${user?.email}`);
            return res.json();
        },
    })
   
    return (
        <div className="bg-gray-300  p-2">
               {mycourse.map(item=> <div key={item._id} className="card mb-4 card-side w-4/6 opacity-90 bg-base-100 p-2 shadow">
                <figure className="w-60"><img src={item.courseImage}alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{item.courseName}</h2>
                    <p className="font-bold text-orange-600">${item.courseFee}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-red-600 text-white">delete</button>
                    </div>
                </div>
            </div> )
               
               
               }

           
        </div>
    );
};

export default Mycourse;