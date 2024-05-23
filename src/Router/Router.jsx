import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import NotFound from "../components/Shared/NotFound";
import ServiceDetails from "../components/All Blogs/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<NotFound></NotFound> ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/service/:id',
            element:<ServiceDetails></ServiceDetails>
        }
        ,
        {
            path:'/contact',
            element:<Contact/>
        }
        ,
        {
            path:'/blogs',
            element:<Blogs/>
        }
        ,
        {
            path:'/about',
            element:<About/>
        }
      ]
    },
  ]);
  export default router;