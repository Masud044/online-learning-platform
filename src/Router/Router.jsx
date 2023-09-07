import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Course from "../Page/Course/Course";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";



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
               element:<PrivateRoute><Course></Course></PrivateRoute>
            },
            {
               path:'login',
               element:<Login></Login>
            },
            {
               path:'signup',
               element:<SignUp></SignUp>
            }

            
         ]
      }
       

])