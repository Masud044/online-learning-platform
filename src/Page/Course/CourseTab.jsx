

import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegEye } from 'react-icons/fa';
import { MdPlayLesson } from 'react-icons/md';

const CourseTab = ({ item }) => {
    const { courseImage, rating, enroll, lessons, courseName, courseFee } = item

    return (
        <div>

            <div className="card transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105   duration-300  w-96 bg-purple-950 shadow">
                <figure className='w-full h-52'><img src={item.courseImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex text-white justify-between'>
                        <Rating style={{ maxWidth: 80 }} value={item.rating} readOnly />
                        <div className='flex opacity-80 items-center gap-2'>
                            <FaRegEye className='text-white'></FaRegEye>
                            <p>{item.enroll}</p>
                        </div>
                        <div className='flex opacity-80 items-center gap-2'>
                            <MdPlayLesson className="text-white "></MdPlayLesson>
                            <p>{item.lessons}</p>
                        </div>



                    </div>
                    <hr className='mt-2 mb-2 opacity-25'></hr>
                    <div className='flex text-white gap-6 opacity-80'>
                        <h2 className="card-title">{item.courseName}</h2>
                        <p className='text-orange-400 font-bold text-2xl'>${item.courseFee}</p>
                    </div>

                    <div className="card-actions ">
                        <button className="btn  bg-purple-800 text-white   w-full">Add Course</button>
                    </div>
                </div>
            </div>





        </div>

    );
};

export default CourseTab;