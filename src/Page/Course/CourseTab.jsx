

import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegEye } from 'react-icons/fa';
import { MdPlayLesson } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const CourseTab = ({ item }) => {

     const {user} = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();
    const { courseImage, rating, enroll, lessons, courseName, courseFee,_id } = item

    const handleMyclass=(item)=>{
        //  console.log(item)
         const {courseName,courseImage,courseFee,_id}= item;
         if(user && user?.email){
            const myCourse = {classId:_id,courseName,courseImage,courseFee,email: user?.email}
          fetch('http://localhost:5000/mycourse',{
                method:'POST',
                headers:{
                   'content-type': 'application/json',
                },
                body:JSON.stringify(myCourse),
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.insertedId){
                     toast.success('Add the successfully')
                }
             })
         }
         else{
            Swal.fire({
                title: 'please login',
               
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{form:location}});
                }
              })
            
             
         }

         
    }

   

    return (
        <div>

            <div className="card transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105   duration-300  w-96 bg-purple-950 shadow">
                <figure className='w-full h-52'><img src={courseImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex text-white justify-between'>
                        <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                        <div className='flex opacity-80 items-center gap-2'>
                            <FaRegEye className='text-white'></FaRegEye>
                            <p>{enroll}</p>
                        </div>
                        <div className='flex opacity-80 items-center gap-2'>
                            <MdPlayLesson className="text-white "></MdPlayLesson>
                            <p>{lessons}</p>
                        </div>



                    </div>
                    <hr className='mt-2 mb-2 opacity-25'></hr>
                    <div className='flex text-white gap-12 opacity-80'>
                       <Link  to={`/details/${_id}`}> <h2 className="card-title">{courseName}</h2></Link>
                        <p className='text-orange-400 font-bold text-2xl'>${courseFee}</p>
                    </div>

                    <div className="card-actions">
                     <button onClick={()=>handleMyclass(item)} className="btn  bg-purple-800 border-none w-full text-white ">Add Course</button>
                </div>
            </div>




           </div>
        </div>

    );
};

export default CourseTab;