import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdminCheck = () => {
    const {user} = useContext(AuthContext);
     const {data:isAdmin,isLoading} = useQuery({
         queryKey:['admin',user?.email],
         queryFn:async()=>{
             const res = await fetch(`http://localhost:5000/user/admin/${user?.email}`);
             return res.json();
         }
     })
     return [isAdmin,isLoading]
};

export default useAdminCheck;