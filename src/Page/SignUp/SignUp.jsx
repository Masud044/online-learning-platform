import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {
    
    const {register, handleSubmit,formState: { errors },  } = useForm();
    const{createUser, updateUserProfile } = useContext(AuthContext);

      const onsubmit=(data)=>{
        console.log(data);

        createUser(data.email, data.password)
        .then(result => {
                const logUser = result.user;
                console.log(logUser);
            });




    }

     
    
    return (
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-900 bg-opacity-5">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div  className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-purple-950">
                        <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                            <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text opacity-60 text-white">First Name</span>
                                </label>
                                <input type="text" {...register("firstName",{require:true})} placeholder="firstName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text opacity-60 text-white">Last Name</span>
                                </label>
                                <input type="text" {...register("LastName",{require:true})} placeholder="LastName" className="input input-bordered" required />
                            </div>
                            </div>
                       
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white opacity-60">PhotoUrl</span>
                                </label>
                                <input type="text" {...register("photoUrl",{require:true})} placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text opacity-60 text-white">Email</span>
                                </label>
                                <input type="email" {...register("email",{require:true})} placeholder="email" name="email" className="input input-bordered" required />
                             
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white opacity-60">Password</span>
                                </label>
                                <input type="password"  {...register("password",{require:true})} placeholder="password" name="password" className="input input-bordered" required />
                                {/* {
                                errors.password?.type==='maxLength' && <p className="text-red-600">password must be 6 character</p>
                              } */}
                                <label className="label">
                                    <a href="#" className="label-text opacity-60 text-white">Forgot password?</a>
                                </label>
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