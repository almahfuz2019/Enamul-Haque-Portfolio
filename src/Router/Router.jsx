import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../components/Shared/NotFound";
import BlogDetails from "../components/Blogs/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import PreConstruction from "../components/Features/PreConstruction";
import Buy from "../components/Features/Buy";
import Sell from "../components/Features/Sell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:title",
        element: <BlogDetails />,
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
        path: "/sell",
        element: <Sell />,
      },
      {
        path: "/pre-construction",
        element: <PreConstruction />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
    ],
  },
]);
export default router;
