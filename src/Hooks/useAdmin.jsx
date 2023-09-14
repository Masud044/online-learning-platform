import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            return res.json();

        }
    

    })

    return [refetch,isLoading,users]
};

export default useAdmin;