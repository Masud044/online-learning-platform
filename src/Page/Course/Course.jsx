

import { ColorRing } from 'react-loader-spinner';
import CourseTab from './CourseTab';

import UseCourse from '../../Hooks/UseCourse';


const Course = () => {
     

    const [course, isLoading, setActiveTab, activeTab] = UseCourse();

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

           

            <div className="mt-20 text-center w-100 mx-auto">
                <div className="d-flex justify-center items-center">


                    <div onClick={() => handleTabClick("Design")}
                        className={`tab Design rounded-lg font-bold ${activeTab == "Design" ? " bg-purple-900 text-white" : ""
                            }`}>
                        Design
                    </div>
                    <div
                        onClick={() => handleTabClick("WebDevelopment")}
                        className={`tab  WebDevelopment rounded-lg font-bold ${activeTab == "WebDevelopment" ? " bg-purple-900 text-white" : ""
                            }`}  >
                        WebDevelopment


                    </div>
                    <div
                        onClick={() => handleTabClick("DataScience")}
                        className={`tab  DataScience rounded-lg font-bold ${activeTab == "DataScience" ? " bg-purple-900 text-white" : ""
                            }`}  >
                        DataScience


                    </div>
                    <div
                        onClick={() => handleTabClick("ComputerScience")}
                        className={`tab  ComputerScience rounded-lg font-bold ${activeTab == "ComputerScience" ? " bg-purple-950 text-white" : ""
                            }`}  >
                        ComputerScience


                    </div>

                    <div
                        onClick={() => handleTabClick("Marketing")}
                        className={`tab  Marketing rounded-lg font-bold ${activeTab == "Marketing" ? " bg-purple-900 text-white" : ""
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