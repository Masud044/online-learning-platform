import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import { FaRegEye } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { MdPlayLesson } from "react-icons/md";
import { useParams } from "react-router-dom";



const CourseDetails = () => {
    const { id } = useParams();

    const { isLoading, data: details = [] } = useQuery({
        queryKey: ['datails'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/details/${id}`)
            return res.json();
        },
    })

    return (
        <div className="md:flex gap-40  bg-gray-300 p-4">

            <div className="">

                <img src={details.courseImage} height={300} width={400} alt="" />


                <div className="flex gap-10">
                    <Rating style={{ maxWidth: 80 }} value={details.rating} readOnly />
                    <div className='flex opacity-80 items-center gap-2'>
                        <FaRegEye className='text-red-500'></FaRegEye>
                        <p>{details.enroll} Enrolled students</p>
                    </div>

                </div>
                <div className="flex gap-14 mt-6">
                    <div className="flex gap-2 justify-center items-center">

                        <MdPlayLesson className="text-red-500 "></MdPlayLesson>
                        <p>{details.lessons}  Lession</p>

                    </div>
                    <div className="flex gap-3 justify-center items-center">
                        <BiTime></BiTime>
                        <p className="">{details.duration} Duration</p>
                    </div>

                </div>




            </div>

            <div className=" md:mt-0 mt-10 font-semibold space-y-6">
                <h1 className="text-black opacity-80"> <span className="font-bold ">Course Name :</span>  {details.courseName}</h1>
                <h1 className="text-black opacity-80"><span className="font-bold">Course Category :</span>  {details['category'] || details[' category']}</h1>
                <p className="text-black opacity-80"> <span className="font-bold">Course Description :</span>{details.courseDescription}</p>

                <h1 className="font-bold text-black opacity-80">Course Curriculum :</h1>
                {

                    details.curriculum?.map(item => <li className="text-black opacity-80" key={item} >{item}</li>)
                }
               {
                 details.feedback?<p className="text-black opacity-80"> <span className="font-bold">Course Feedback :</span>{details.feedback}</p>:<></>
               }
                
            </div>

        </div>
    );
};

export default CourseDetails;