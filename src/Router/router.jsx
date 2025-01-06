import {
    createBrowserRouter,
 } from "react-router-dom";
import Root from "../Pages/Root";
import Error from "../Error"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Addvisa from "../Pages/Addvisa";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import AllVisas from "../Pages/AllVisas";
import VisaDetails from "../Pages/VisaDetails";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisaApplication from "../Pages/MyVisaApplication";
import AboutUS from "../Pages/AboutUS";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
          path: "/",
          element:<Home></Home>,
          loader: ()=> fetch('https://assignment-10-server-pied-phi.vercel.app/visas'),
        },
        {
          path: "/about-us",
          element: <AboutUS></AboutUS>

        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/add_visa",
          element: <PrivateRoute><Addvisa></Addvisa></PrivateRoute>
        },
        {
          path:"/all_visas",
          element:<AllVisas></AllVisas>,
          loader: ()=> fetch('https://assignment-10-server-pied-phi.vercel.app/visas'),
        },
        {
          path: "/visa_details/:id",
          element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
          loader : ({params})=> fetch(`https://assignment-10-server-pied-phi.vercel.app/visas/single/${params.id}`)
        },
        {
          path: "/added_visas",
          element:<PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
        },
        {
          path: "/visa_applications",
          element: <PrivateRoute><MyVisaApplication></MyVisaApplication></PrivateRoute>
        }
      ]
    },
  ]);
export default router;