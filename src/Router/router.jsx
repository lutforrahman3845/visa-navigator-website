import {
    createBrowserRouter,
 } from "react-router-dom";
import Root from "../Pages/Root";
import Error from "../Error"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Addvisa from "../Pages/Addvisa";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
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
        }
      ]
    },
  ]);
export default router;