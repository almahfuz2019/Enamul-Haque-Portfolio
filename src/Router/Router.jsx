import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import NotFound from "../components/Shared/NotFound";
import ServiceDetails from "../components/All Blogs/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import SellPage from "../Pages/Features/SellPage";
import PreConstruction from "../components/Features/PreConstruction";
import Buy from "../components/Features/Buy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/featuer/sell",
        element: <SellPage />,
      },
      {
        path: "/featuer/pre-construction",
        element: <PreConstruction />,
      },
      {
        path: "/featuer/buy",
        element: <Buy/>,
      },
    ],
  },
]);
export default router;
