import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const UseCourse = () => {
    const [activeTab, setActiveTab] = useState(" ");
   
    

    const { isLoading, data: course = [] } = useQuery({
        queryKey: ['courses', activeTab],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/courses/${activeTab}`)
            return res.json();
        },
       
    })
    return [course,isLoading,setActiveTab,activeTab];
};

export default UseCourse;