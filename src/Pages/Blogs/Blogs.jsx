import { Helmet } from "react-helmet-async";
import AllBlogs from "../../components/Blogs/Blogs";
import ForConnected from "../../components/ForConnected/ForConnected";
import Cityscape_Skyline_View from "./../../assets/Images/Cityscape_Skyline_View.png";
const Blogs = () => {
  return (
    <div className="overflow-hidden">
      {/* Set document head */}
      <Helmet>
        <title>Blogs </title>
        <meta
          name="description"
          content="Welcome to our home page where you can find all the information you need."
        />
        <meta name="keywords" content="home, services, blog, testimonials" />
      </Helmet>
      {/* Header section with image */}
      <div
        className=" bg-center mt-16 md:mt-0  bg-cover  py-32 mb-24 "
        style={{
          backgroundImage: `url(${Cityscape_Skyline_View})`,
        }}
      >
        <h1
          data-aos="zoom-in"
          className="text-center dm-sans-font text-3xl md:text-5xl font-bold text-white"
        >
          Recent News & Blogs
        </h1>
        <div
          data-aos="zoom-out"
          className=" bg-primary mx-auto h-1 w-60 md:w-80 mt-5"
        ></div>
      </div>
      {/* Additional Components */}
      <AllBlogs />
      <ForConnected />
    </div>
  );
};
export default Blogs;
