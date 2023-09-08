import { useQuery } from '@tanstack/react-query'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegEye } from 'react-icons/fa';
import { MdPlayLesson } from 'react-icons/md';
import { ColorRing } from 'react-loader-spinner';

const Course = () => {

    const { isLoading, data: course = [] } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/courses')
            return res.json();
        },
    })

    if(isLoading){
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
        <div>
             
            <div className="mt-10 grid grid-cols-3 gap-4 ">
                {
                    course.map(item =>

                        <div key={item._id} className="card transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105   duration-300  w-96 bg-purple-950 shadow">
                            <figure className='w-full h-52'><img src={item.courseImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className='flex text-white justify-between'>
                                <Rating style={{ maxWidth: 80 }} value={item.rating} readOnly  />
                                <div className='flex opacity-80 items-center gap-2'>
                                <FaRegEye className='text-white'></FaRegEye>
                                    <p>{item.enroll}</p>
                                </div>
                                <div  className='flex opacity-80 items-center gap-2'>
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

                    )
                }


            </div>
        </div>

    );
};

export default Course;