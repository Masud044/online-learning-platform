import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin = () => {
     const {user} = useContext(AuthContext);
    const { isLoading, refetch, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            return res.json()

        }
    

    })

    return [refetch,isLoading,users]
};

export default useAdmin;