import { useQuery } from '@tanstack/react-query'

import { ColorRing } from 'react-loader-spinner';
import CourseTab from './CourseTab';
import { useRef, useState } from 'react';

const Course = () => {
    const [activeTab, setActiveTab] = useState(" ");
     const [search, setSearch] = useState('');
     const searchref = useRef(null);

    const { isLoading, data: course = [] } = useQuery({
        queryKey: ['courses', activeTab,search],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/courses/${activeTab}`)
            return res.json();
        },
    })

    


    const handleSearch = () =>{
         console.log(searchref.current.value)
          setSearch(searchref.current.value)
    }

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    if (isLoading) {
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

    return (
        <div className='mt-20'>

            <div className=" form-control bg-gray-200 p-10 ">
                <div className="input-group flex items-center justify-center  ">
                  
               
                    <input ref={searchref} type="text" placeholder="Search your favourite course" className="input input-bordered w-96" />
                    <button onClick={handleSearch} className="btn btn-square bg-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className="mt-20 text-center w-100 mx-auto">
                <div className="d-flex justify-center items-center">


                    <div onClick={() => handleTabClick("Design")}
                        className={`tab Design font-bold ${activeTab == "Design" ? " bg-purple-900 text-white" : ""
                            }`}>
                        Design
                    </div>
                    <div
                        onClick={() => handleTabClick("WebDevelopment")}
                        className={`tab  WebDevelopment font-bold ${activeTab == "WebDevelopment" ? " bg-purple-900 text-white" : ""
                            }`}  >
                        WebDevelopment


                    </div>
                    <div
                        onClick={() => handleTabClick("DataScience")}
                        className={`tab  DataScience font-bold ${activeTab == "DataScience" ? " bg-purple-900 text-white" : ""
                            }`}  >
                        DataScience


                    </div>
                    <div
                        onClick={() => handleTabClick("ComputerScience")}
                        className={`tab  ComputerScience font-bold ${activeTab == "ComputerScience" ? " bg-purple-900 text-white" : ""
                            }`}  >
                        ComputerScience


                    </div>

                    <div
                        onClick={() => handleTabClick("Marketing")}
                        className={`tab  Marketing font-bold ${activeTab == "Marketing" ? " bg-purple-900 text-white" : ""
                            }`}  >
                        Marketing


                    </div>

                </div>

                <div className='mt-20  grid md:grid-cols-3 items-center justify-center gap-4'>
                    {
                        course.map(item => <CourseTab key={item._id} item={item}  ></CourseTab>)
                    }

                </div>



            </div>



        </div>







    );
};

export default Course;