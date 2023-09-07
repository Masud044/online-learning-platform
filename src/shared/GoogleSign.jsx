

import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSign = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

     const{googleSignIn } = useContext(AuthContext);
     const handlegoogle=()=>{
          googleSignIn()
          .then(()=>{
             navigate(from,{replace:true});
          })
     }
    return (
        <div className='flex items-center justify-center'>
              <button onClick={handlegoogle} className=''><FcGoogle className='h-10 w-16 '></FcGoogle> </button>
        </div>
    );
};

export default GoogleSign;