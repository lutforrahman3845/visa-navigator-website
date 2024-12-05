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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
          path: "/",
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/visas'),
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
          loader: ()=> fetch('http://localhost:5000/visas'),
        },
        {
          path: "/visa_details/:id",
          element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
          loader : ({params})=> fetch(`http://localhost:5000/visas/single/${params.id}`)
        }
      ]
    },
  ]);
export default router;