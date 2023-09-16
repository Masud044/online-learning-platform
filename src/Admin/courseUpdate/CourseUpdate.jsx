
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const CourseUpdate = () => {
    const { register, reset, handleSubmit } = useForm();

     const{id} = useParams();
    

    const onSubmit = (data) => {
       
        const{duration,courseFee,lessons} = data
        const update = {duration:duration,courseFee:parseInt(courseFee),lessons:lessons}
        fetch(`http://localhost:5000/updatecourse/${id}`,{
             method:'PATCH',
             headers:{
                'content-type':'application/json',
             },
             body:JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'update successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <form className="mt-20 mb-20 bg-purple-600 p-4 rounded-lg" onSubmit={handleSubmit(onSubmit)}>


                <div className="grid grid-cols-2 gap-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Duration</span>

                        </label>
                        <input type="text" {...register("duration", { required: true })} placeholder="duration" className="input input-bordered max-w-5xl " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">CourseFee</span>

                        </label>
                        <input type="number"{...register("courseFee", { required: true })} placeholder="courseFee" className="input input-bordered max-w-5xl " />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Lesson</span>

                        </label>
                        <input type="number"{...register("lessons", { required: true })} placeholder="lessons" className="input input-bordered max-w-5xl " />

                    </div>
                </div>




                <input className="bg-purple-800 mt-6 text-white rounded-lg p-3" type="submit" value="Update Toy" />
            </form >
        </div>
    );
};

export default CourseUpdate;