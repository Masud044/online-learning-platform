import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Course from "../Page/Course/Course";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Page/Course/CourseDetails";
import Mycourse from "../Page/MyCourse/Mycourse";
import ManageUser from "../Admin/ManageUser/ManageUser";
import ManageCourse from "../Admin/manageCourse/ManageCourse";
import CourseUpdate from "../Admin/courseUpdate/CourseUpdate";
import Modal from "../Page/MyCourse/ModalOpen";




 export const router = createBrowserRouter([

      {
         path:'/',
         element: <Main></Main>,
         children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'course',
               element:<Course></Course>
            },
            {
               path:'login',
               element:<Login></Login>
            },
            {
               path:'signup',
               element:<SignUp></SignUp>
            },
            {
               path:'details/:id',
               element:<CourseDetails></CourseDetails>
            },
            {
               path:'mycourse',
               element:<Mycourse></Mycourse>
            },
            {
              path:'manage',
              element: <ManageUser></ManageUser>
            },
            {
               path:'managecourse',
               element:<ManageCourse></ManageCourse>
            },
            {
               path:'courseupdate/:id',
               element:<CourseUpdate></CourseUpdate>
            },
           

            
         ]
      }
       

])