import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import {  ColorRing } from 'react-loader-spinner'


const PrivateRoute = ({children}) => {

     const{user,loader} = useContext(AuthContext);
      const location = useLocation();
     if(loader){
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
     if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
     }

     if(user){
         return children;
     }
     
    
};

export default PrivateRoute;