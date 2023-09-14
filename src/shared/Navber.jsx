import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
    const { Logout, user } = useContext(AuthContext);


    const handleLogout = () => {
        Logout()
            .then(() => { })
            .catch(error => console.log(error))
    }



    return (

        <div className="navbar  z-10 bg-purple-950 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10]  p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li className="text-2xl font-light text-gray-700">Home</li></Link>
                        <Link to='/course'><li className="text-2xl font-light text-gray-700">Course</li></Link>

                        {
                            user ? <> <Link to='/mycourse'><li className="text-2xl font-light text-gray-700">My course</li></Link></> :
                                <></>
                        }
                        <Link to='/manage'><li className="text-2xl font-light text-gray-700">Admin</li></Link>




                    </ul>
                </div>
                <img src="https://i.ibb.co/DpMy2nG/sarmi2-08.jpg" width={80} height={80} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li className="text-2xl font-light text-white">Home</li></Link>
                    <li tabIndex={0}>

                    </li>
                    <Link to='/course'><li className="text-2xl font-light text-white">Course</li></Link>

                    {
                        user ? <> <Link to='/mycourse'><li className="text-2xl font-light text-white ml-4">My course</li></Link></> :
                            <></>
                    }
                    <Link to='/manage'><li className="text-2xl font-light text-white ml-4">Admin</li></Link>




                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="mr-2">
                        <div className="tooltip tooltip-bottom z-20" data-tip={user?.displayName}>
                            <img className="rounded-full w-12 h-12" src={user?.photoURL} alt="" />
                        </div>
                    </div>
                }
                {
                    user ? <>
                        <Link to='/'> <button onClick={handleLogout} className="bg-purple-500 font-mono font-semibold text-white p-3 rounded-xl">LogOut</button></Link>
                    </> : <>
                        <Link to='/login'> <button className="bg-purple-500 font-mono font-semibold text-white p-3 rounded-xl">Login</button></Link>
                    </>
                }

            </div>
        </div>

    );
};

export default Navber;