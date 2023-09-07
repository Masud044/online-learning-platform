import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSign from "../../shared/GoogleSign";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm} from "react-hook-form"

import { toast } from "react-hot-toast";



const Login = () => {
    const {register, reset, handleSubmit,formState: { errors },  } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const{signIn} = useContext(AuthContext);

    const onsubmit =data=>{
         console.log(data.email,data.password);

         signIn(data.email, data.password)
         .then(result=>{
             const user = result.user;
             console.log(user);
             reset();
             toast.success('Successfully Login')
             navigate(from,{replace: true});
         })
    }
   
    
    return (
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-900 bg-opacity-5">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-purple-950">
                        <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text opacity-60 text-white">Email</span>
                                </label>
                                <input type="email" {...register("email",{require:true})}  placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white opacity-60">Password</span>
                                </label>
                                <input type="password" {...register("password",{require:true})}  placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text text-white opacity-60">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                         
                          <GoogleSign></GoogleSign>
                        <Link to='/signup'> <p className="text-white text-center underline opacity-60">Create Account</p> </Link>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;