import { Link } from "react-router-dom";
import UseCourse from "../../Hooks/UseCourse";
import { ColorRing } from "react-loader-spinner";


const TopCetagory = () => {

    const [course, isLoading] = UseCourse();
    if(isLoading){
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
        <div className="bg-gray-200 mt-10 p-4 ">
            <div className="flex justify-between mb-8">
                <h1 className="text-2xl font-semibold">Top Category</h1>
                <Link to="/course"><button className="btn bg-purple-600 font-medium text-white border-none">See All Category</button></Link>
            </div>

            <div className="grid grid-cols-4  items-center justify-between gap-4">
                {
                    course.slice(0, 8).map(item => {
                        {
                          

                            return (
                                <div key={item._id} className="card transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105   duration-300  w-60 p-2 px-4 bg-base-100 shadow">
                                    <figure className="w-50 h-40"><img src={item.courseImage} alt="Shoes" /></figure>
                                    <div className="card-body">
                                    <h2 className="card-title">{item?.['category'] || item?.[' category']}</h2> 
                                        
                                        
                                    </div>
                                </div>
                            );
                        }
                    })
                }

            </div >

        </div >);

};

export default TopCetagory;