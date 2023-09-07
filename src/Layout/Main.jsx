import { Outlet } from "react-router-dom";

import Navber from "../shared/Navber";
import Footer from "../shared/Footer";


const Main = () => {
    return (
        <div >
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;