import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";


const SignUp = () => {

    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);


    const navigate = useNavigate();

    const onsubmit = (data) => {
        // console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const logUser = result.user;
                // console.log(logUser);
                updateUserProfile(data.name, data.photoURL)
               
                    .then(() => {
                        const users = {name:data?.name, email:data?.email,image:data?.photoURL,role:'' }
                        fetch('http://localhost:5000/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(users),
                        })
                            .then(res => res.json())
                            .then(data => {
                                 if(data.insertedId){
                                     reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'successfully user created',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                                      navigate('/');
                                 }
                               
                            })
                       
                    })
            });



    }



    return (
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-900 bg-opacity-5">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-purple-950">
                        <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                            <div className="flex gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text opacity-60 text-white">First Name</span>
                                    </label>
                                    <input type="text" {...register("name", { require: true })} placeholder="Name" className="input input-bordered" required />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white opacity-60">PhotoUrl</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { require: true })} placeholder="photo url" name="photoURL" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text opacity-60 text-white">Email</span>
                                </label>
                                <input type="email" {...register("email", { require: true })} placeholder="email" name="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white opacity-60">Password</span>
                                </label>
                                <input type="password"  {...register("password", { require: true })} placeholder="password" name="password" className="input input-bordered" required />
                                {/* {
                                errors.password?.type==='maxLength' && <p className="text-red-600">password must be 6 character</p>
                              } */}

                            </div>
                            <div className="form-control mt-6">


                                <button className="btn btn-primary">Sign Up</button>

                            </div>

                        </form>

                        <p className="text-white text-center opacity-60 ">Already Have An Account? <Link to='/login'><span className="underline font-bold">login</span></Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;